import React, { useRef } from 'react';
import { Camera, Image as ImageIcon, X } from 'lucide-react';

interface PhotoUploadProps {
  label: string;
  value: string | null;
  onChange: (value: string | null) => void;
}

export default function PhotoUpload({ label, value, onChange }: PhotoUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <button
        onClick={() => fileInputRef.current?.click()}
        className="w-full border border-border rounded-sm py-2 px-4 text-text-main font-semibold text-xs uppercase tracking-wider mb-2 hover:bg-primary-light hover:border-primary transition-colors flex items-center justify-center gap-2"
      >
        <Camera size={16} />
        {label}
      </button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        capture="environment"
        className="hidden"
      />
      <div className="w-full aspect-square bg-[#FAF9F8] rounded-sm flex items-center justify-center overflow-hidden border border-border relative group">
        {value ? (
          <>
            <img src={value} alt={label} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            <button
              onClick={(e) => {
                e.stopPropagation();
                onChange(null);
              }}
              className="absolute top-2 right-2 bg-white/80 hover:bg-white p-1 rounded-full shadow-md text-red-500 transition-colors opacity-0 group-hover:opacity-100"
              title="Remover foto"
            >
              <X size={16} />
            </button>
          </>
        ) : (
          <div className="flex flex-col items-center text-text-muted opacity-40">
            <ImageIcon size={40} strokeWidth={1} />
          </div>
        )}
      </div>
    </div>
  );
}
