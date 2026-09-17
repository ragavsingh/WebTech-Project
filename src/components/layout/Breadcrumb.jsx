import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumb({ items }) {
  return (
    <nav className="flex items-center space-x-1.5 text-xs text-slate-500 py-2.5 overflow-x-auto whitespace-nowrap">
      <Link 
        to="/" 
        className="flex items-center text-slate-400 hover:text-slate-700 transition-colors"
        title="Home"
      >
        <Home className="w-3.5 h-3.5" />
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
            {isLast ? (
              <span className="font-medium text-slate-800 truncate max-w-[240px] sm:max-w-none">
                {item.label}
              </span>
            ) : (
              <Link 
                to={item.path} 
                className="hover:text-indigo-600 transition-colors truncate max-w-[180px] sm:max-w-none"
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
