import React, { useState } from 'react';
import { X, Delete, Calculator as CalcIcon } from 'lucide-react';

interface ICalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CalculatorModal: React.FC<ICalculatorModalProps> = ({ isOpen, onClose }) => {
  const [display, setDisplay] = useState('0');
  const [prevVal, setPrevVal] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleNum = (n: string) => {
    setDisplay((prev) => (prev === '0' || prev === 'Error' ? n : prev + n));
  };

  const handleOp = (op: string) => {
    if (display === 'Error') return;
    setPrevVal(display + ' ' + op + ' ');
    setDisplay('0');
  };

  const handleClear = () => {
    setDisplay('0');
    setPrevVal(null);
  };

  const handleDelete = () => {
    setDisplay((prev) => (prev.length > 1 ? prev.slice(0, -1) : '0'));
  };

  const handleCalculate = () => {
    if (!prevVal) return;
    try {
      const fullExpr = (prevVal + display)
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        .replace(/\^/g, '**');
      
      // Sanitasi ekspresi matematika sederhana
      if (!/^[\d\s+\-*/.()]+$/.test(fullExpr)) {
        throw new Error('Invalid');
      }
      
      // Evaluasi aman ekspresi matematika murni
      const result = Function(`'use strict'; return (${fullExpr})`)();
      setDisplay(String(Number(result.toFixed(6))));
      setPrevVal(null);
    } catch {
      setDisplay('Error');
    }
  };

  const handleScientific = (fn: string) => {
    try {
      const val = parseFloat(display);
      if (isNaN(val)) return;
      let res = 0;
      if (fn === 'sqrt') res = Math.sqrt(val);
      else if (fn === 'sin') res = Math.sin((val * Math.PI) / 180);
      else if (fn === 'cos') res = Math.cos((val * Math.PI) / 180);
      else if (fn === 'tan') res = Math.tan((val * Math.PI) / 180);
      else if (fn === 'sq') res = val * val;
      setDisplay(String(Number(res.toFixed(6))));
    } catch {
      setDisplay('Error');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-fade-in">
      <div className="w-full max-w-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl p-5 select-none">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2 text-slate-800 dark:text-slate-100 font-bold text-sm">
            <CalcIcon size={16} className="text-emerald-600" />
            <span>Kalkulator Matematika</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Display */}
        <div className="my-4 p-3 bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800 rounded-2xl flex flex-col items-end justify-center min-h-16">
          <span className="text-[11px] text-slate-400 dark:text-slate-500 font-mono h-4">
            {prevVal || ''}
          </span>
          <span className="text-2xl font-bold font-mono text-slate-800 dark:text-slate-100 truncate w-full text-right">
            {display}
          </span>
        </div>

        {/* Scientific row */}
        <div className="grid grid-cols-5 gap-1.5 mb-2">
          {['sin', 'cos', 'tan', 'sqrt', 'sq'].map((fn) => (
            <button
              key={fn}
              onClick={() => handleScientific(fn)}
              className="py-1.5 text-[10px] font-semibold rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-900 transition-colors"
            >
              {fn === 'sq' ? 'x²' : fn === 'sqrt' ? '√x' : fn}
            </button>
          ))}
        </div>

        {/* Keypad */}
        <div className="grid grid-cols-4 gap-2">
          <button
            onClick={handleClear}
            className="py-3 font-bold rounded-xl bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 hover:bg-red-100 text-sm"
          >
            AC
          </button>
          <button
            onClick={handleDelete}
            className="py-3 font-semibold rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 flex items-center justify-center text-sm"
          >
            <Delete size={16} />
          </button>
          <button
            onClick={() => handleOp('^')}
            className="py-3 font-semibold rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 text-sm"
          >
            ^
          </button>
          <button
            onClick={() => handleOp('÷')}
            className="py-3 font-bold rounded-xl bg-emerald-100/60 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-200 text-base"
          >
            ÷
          </button>

          {['7', '8', '9'].map((n) => (
            <button
              key={n}
              onClick={() => handleNum(n)}
              className="py-3 font-semibold rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-800 dark:text-slate-100 hover:bg-slate-50 text-base shadow-2xs"
            >
              {n}
            </button>
          ))}
          <button
            onClick={() => handleOp('×')}
            className="py-3 font-bold rounded-xl bg-emerald-100/60 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-200 text-base"
          >
            ×
          </button>

          {['4', '5', '6'].map((n) => (
            <button
              key={n}
              onClick={() => handleNum(n)}
              className="py-3 font-semibold rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-800 dark:text-slate-100 hover:bg-slate-50 text-base shadow-2xs"
            >
              {n}
            </button>
          ))}
          <button
            onClick={() => handleOp('-')}
            className="py-3 font-bold rounded-xl bg-emerald-100/60 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-200 text-base"
          >
            -
          </button>

          {['1', '2', '3'].map((n) => (
            <button
              key={n}
              onClick={() => handleNum(n)}
              className="py-3 font-semibold rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-800 dark:text-slate-100 hover:bg-slate-50 text-base shadow-2xs"
            >
              {n}
            </button>
          ))}
          <button
            onClick={() => handleOp('+')}
            className="py-3 font-bold rounded-xl bg-emerald-100/60 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-200 text-base"
          >
            +
          </button>

          <button
            onClick={() => handleNum('0')}
            className="col-span-2 py-3 font-semibold rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-800 dark:text-slate-100 hover:bg-slate-50 text-base shadow-2xs"
          >
            0
          </button>
          <button
            onClick={() => handleNum('.')}
            className="py-3 font-bold rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-800 dark:text-slate-100 hover:bg-slate-50 text-base shadow-2xs"
          >
            .
          </button>
          <button
            onClick={handleCalculate}
            className="py-3 font-bold rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 text-base shadow-md active:scale-95 transition-all"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

