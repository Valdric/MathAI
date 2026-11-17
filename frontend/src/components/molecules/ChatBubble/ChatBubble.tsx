import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import type { IMessage } from '../../../types/chat';
import { Avatar } from '../../../components/atoms/Avatar';
import { Skeleton } from '../../../components/atoms/Skeleton';
import { Spinner } from '../../../components/atoms/Spinner';

export interface IChatBubbleProps {
  message?: IMessage;
  isLoading?: boolean;
}

const preprocessLaTeX = (text: string) => {
  let processedText = text.replace(/\\\[/g, '$$');
  processedText = processedText.replace(/\\\]/g, '$$');
  processedText = processedText.replace(/\\\(/g, '$');
  processedText = processedText.replace(/\\\)/g, '$');
  return processedText;
};

export const ChatBubble: React.FC<IChatBubbleProps> = ({ message, isLoading = false }) => {
  if (isLoading) {
    return (
      <div className="flex gap-4 w-full p-4 border-b border-slate-200/50 dark:border-slate-900/50 hover:bg-slate-100/30 dark:hover:bg-slate-900/20 transition-colors duration-150 bg-white/40 dark:bg-slate-950/20">
        <div className="shrink-0">
          <Avatar name="MathAI" />
        </div>
        <div className="flex flex-col gap-1 w-full overflow-hidden">
          <div className="flex items-center gap-2 select-none">
            <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">MathAI</span>
            <span className="text-xs text-slate-500">sedang berpikir...</span>
          </div>
          <div className="text-slate-700 dark:text-slate-300 text-sm md:text-base leading-relaxed">
            <div className="flex flex-col gap-2.5 max-w-md py-1">
              <Skeleton width="90%" height="14px" />
              <Skeleton width="75%" height="14px" />
              <Skeleton width="50%" height="14px" />
            </div>
            <div className="flex items-center gap-2 mt-4 text-xs text-slate-400 dark:text-slate-500 select-none">
              <Spinner size="sm" />
              <span>merumuskan jawaban...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!message) return null;

  const isUser = message.sender === 'user';

  // Parse [attachment: <filename>] prefix jika pesan memiliki lampiran dokumen
  let attachmentName: string | null = null;
  let userText = message.text;
  if (isUser) {
    const match = message.text.match(/^\[attachment:\s*([^\]]+)\]\n?([\s\S]*)$/);
    if (match) {
      attachmentName = match[1].trim();
      userText = match[2];
    }
  }

  const fileExt = attachmentName ? attachmentName.split('.').pop()?.toLowerCase() : null;

  return (
    <div
      className={`flex gap-4 w-full p-4 border-b border-slate-200/50 dark:border-slate-900/50 hover:bg-slate-100/30 dark:hover:bg-slate-900/20 transition-colors duration-150 ${
        isUser ? 'bg-slate-100/55 dark:bg-slate-900/40' : 'bg-white/40 dark:bg-slate-950/20'
      }`}
    >
      <div className="shrink-0">
        <Avatar name={isUser ? 'Siswa' : 'MathAI'} />
      </div>
      <div className="flex flex-col gap-1 w-full overflow-hidden">
        <div className="flex items-center gap-2 select-none">
          <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
            {isUser ? 'Anda' : 'MathAI'}
          </span>
          <span className="text-xs text-slate-500">
            {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
        <div className="text-slate-700 dark:text-slate-300 text-sm md:text-base leading-relaxed">
          {isUser ? (
            <div className="flex flex-col gap-2">
              {attachmentName && (
                <div className="flex items-center gap-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-2.5 max-w-sm shadow-xs">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 font-bold text-xs uppercase ${
                      fileExt === 'pdf'
                        ? 'bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400 border border-red-200/60 dark:border-red-900/40'
                        : fileExt === 'docx'
                        ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-900/40'
                        : 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-900/40'
                    }`}
                  >
                    {fileExt?.toUpperCase() || 'FILE'}
                  </div>
                  <div className="flex flex-col min-w-0 flex-1">
                    <span className="text-xs md:text-sm font-semibold text-slate-800 dark:text-slate-100 truncate" title={attachmentName}>
                      {attachmentName}
                    </span>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500">
                      Dokumen Terlampir
                    </span>
                  </div>
                </div>
              )}
              {userText && (
                <p className="whitespace-pre-wrap wrap-break-word">{userText}</p>
              )}
            </div>
          ) : (
            <div className="wrap-break-word">
              <ReactMarkdown
                remarkPlugins={[remarkMath, remarkGfm]}
                rehypePlugins={[rehypeKatex]}
              >
                {preprocessLaTeX(message.text)}
              </ReactMarkdown>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
