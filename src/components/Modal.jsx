import { useEffect } from 'react';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';

export const Modal = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modalContent = (
    <>
      {/* Backdrop */}
      <div 
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(4px)',
          zIndex: 999999,
        }}
      />

      {/* Modal Container */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          overflowY: 'auto',
          pointerEvents: 'none',
        }}
      >
        {/* Modal Content */}
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            backgroundColor: 'white',
            borderRadius: '1rem',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            width: '100%',
            maxWidth: '28rem',
            maxHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            margin: 'auto',
            position: 'relative',
            pointerEvents: 'auto',
          }}
          className="dark:bg-slate-800"
        >
          {/* Header */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1.5rem',
              borderBottom: '1px solid',
              flexShrink: 0,
            }}
            className="border-slate-200 dark:border-slate-700"
          >
            <h3 
              style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                margin: 0,
              }}
              className="text-slate-900 dark:text-white"
            >
              {title}
            </h3>
            <button
              onClick={onClose}
              type="button"
              style={{
                padding: '0.5rem',
                borderRadius: '0.5rem',
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
              }}
              className="hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400"
            >
              <X size={24} />
            </button>
          </div>

          {/* Content */}
          <div 
            style={{
              padding: '1.5rem',
              overflowY: 'auto',
              flex: 1,
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );

  // Render modal at the root of the body to escape stacking contexts
  return createPortal(modalContent, document.body);
};
