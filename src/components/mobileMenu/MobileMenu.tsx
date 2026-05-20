import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './MobileMenu.css';

interface NavLink {
  label: string;
  path: string;
  scrollTo: string | null;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks: NavLink[] = [
  { label: 'הספר', path: '/', scrollTo: 'book' },
  { label: 'אודות', path: '/', scrollTo: 'author' },
  { label: 'הקהילה', path: '/', scrollTo: 'community' },
  { label: 'החישנים', path: '/', scrollTo: 'meet' },
  { label: 'צרו קשר', path: '/', scrollTo: 'contact' },
  { label: 'קורסים והרצאות', path: '/courses', scrollTo: null },
];

function MobileMenu({ isOpen, onClose }: MobileMenuProps): React.ReactElement {
  const navigate = useNavigate();
  const panelRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when open
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

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleLinkClick = (path: string, scrollTo: string | null): void => {
    onClose();
    navigate(path);
    if (scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(scrollTo);
        if (element) {
          window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <div
      className={`mobile-menu-overlay${isOpen ? ' open' : ''}`}
      onClick={onClose}
      aria-hidden={!isOpen}
    >
      <div
        className={`mobile-menu-panel${isOpen ? ' open' : ''}`}
        ref={panelRef}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="תפריט ניווט"
      >
        <nav className="mobile-menu-nav">
          {navLinks.map((link, index) => (
            <div className="mobile-menu-item" key={index}>
              <button
                className="mobile-menu-link"
                onClick={() => handleLinkClick(link.path, link.scrollTo)}
              >
                {link.label}
              </button>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default MobileMenu;
