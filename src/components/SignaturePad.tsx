import React, { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { Eraser, X, Type, List } from 'lucide-react';

interface SignaturePadProps {
  label: string;
  onSave: (dataUrl: string | null) => void;
}

export default function SignaturePad({ label, onSave }: SignaturePadProps) {
  const sigCanvas = useRef<SignatureCanvas>(null);

  const clear = () => {
    sigCanvas.current?.clear();
    onSave(null);
  };

  const handleEnd = () => {
    if (sigCanvas.current) {
      onSave(sigCanvas.current.getTrimmedCanvas().toDataURL('image/png'));
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md">
      <div className="bg-surface border border-border px-4 py-1 rounded-t-sm -mb-[1px] z-10 text-xs font-semibold text-text-main uppercase tracking-wider">
        {label}
      </div>
      <div className="w-full border border-border rounded-sm overflow-hidden bg-surface shadow-sm">
        <div className="h-32 w-full bg-white">
          <SignatureCanvas
            ref={sigCanvas}
            penColor="#323130"
            canvasProps={{ className: 'w-full h-full' }}
            onEnd={handleEnd}
          />
        </div>
        <div className="bg-[#FAF9F8] border-t border-border flex items-center justify-between px-4 py-2">
          <div className="flex gap-4">
            <button onClick={clear} className="text-primary hover:text-blue-700 transition-colors" title="Limpar">
              <Eraser size={18} />
            </button>
            <button onClick={clear} className="text-text-muted hover:text-text-main transition-colors" title="Cancelar">
              <X size={18} />
            </button>
          </div>
          <div className="w-[1px] h-4 bg-border" />
          <div className="flex gap-4">
            <button className="text-text-muted hover:text-text-main transition-colors">
              <List size={18} />
            </button>
            <button className="text-text-muted hover:text-text-main transition-colors">
              <Type size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
