/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Calendar, Printer, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { ChecklistState } from './types';
import PhotoUpload from './components/PhotoUpload';
import SignaturePad from './components/SignaturePad';

const initialState: ChecklistState = {
  date: new Date().toISOString().split('T')[0],
  address: 'BR 116, 2555',
  time: '',
  unit: '',
  sector: '',
  driver: '',
  registration: '',
  plate: '',
  initialKm: '',
  finalKm: '',
  photos: {
    front: null,
    rear: null,
    rightSide: null,
    leftSide: null,
  },
  items: {
    headlights: false,
    taillights: false,
    plateLight: false,
    extinguisher: false,
    seatbelt: false,
    reverseLight: false,
    airConditioning: false,
    horn: false,
    brakes: false,
    multimedia: false,
    jack: false,
    spareTire: false,
    battery: false,
    turnSignals: false,
  },
  fuelLevel: '2/4',
  waterLevel: '4/4',
  declaration: false,
  signatures: {
    responsible: null,
    driver: null,
  },
};

export default function App() {
  const [state, setState] = useState<ChecklistState>(initialState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleToggle = (item: keyof ChecklistState['items']) => {
    setState((prev) => ({
      ...prev,
      items: { ...prev.items, [item]: !prev.items[item] },
    }));
  };

  const handlePhotoChange = (key: keyof ChecklistState['photos'], value: string | null) => {
    setState((prev) => ({
      ...prev,
      photos: { ...prev.photos, [key]: value },
    }));
  };

  const handleSignatureSave = (key: keyof ChecklistState['signatures'], dataUrl: string | null) => {
    setState((prev) => ({
      ...prev,
      signatures: { ...prev.signatures, [key]: dataUrl },
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-bg py-8 px-4 sm:px-6 lg:px-8 print:p-0 print:bg-white">
      <div className="max-w-3xl mx-auto bg-surface shadow-[0_1.6px_3.6px_0_rgba(0,0,0,0.132),0_0.3px_0.9px_0_rgba(0,0,0,0.108)] rounded-sm overflow-hidden border border-border print:shadow-none print:border-none">
        {/* Header */}
        <div className="bg-primary py-3 px-6 flex justify-center">
          <h1 className="text-white font-semibold text-base tracking-wide uppercase">
            Check List Apoio Logístico
          </h1>
        </div>

        <div className="p-6 space-y-6">
          {/* General Info Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex border border-border rounded-sm overflow-hidden focus-within:border-primary transition-colors">
              <input
                type="date"
                name="date"
                value={state.date}
                onChange={handleInputChange}
                className="flex-1 px-3 py-2 outline-none text-text-main text-sm"
              />
              <div className="bg-primary p-2 flex items-center justify-center text-white">
                <Calendar size={18} />
              </div>
            </div>
            <div className="border border-border rounded-sm px-3 py-2 focus-within:border-primary transition-colors">
              <input
                type="text"
                name="address"
                placeholder="Endereço:"
                value={state.address}
                onChange={handleInputChange}
                className="w-full outline-none text-text-main text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="border border-border rounded-sm px-3 py-2 focus-within:border-primary transition-colors">
              <input
                type="text"
                name="time"
                placeholder="Hora:"
                value={state.time}
                onChange={handleInputChange}
                className="w-full outline-none text-text-main text-sm"
              />
            </div>
            <div className="border border-border rounded-sm px-3 py-2 focus-within:border-primary transition-colors">
              <input
                type="text"
                name="unit"
                placeholder="Unidade:"
                value={state.unit}
                onChange={handleInputChange}
                className="w-full outline-none text-text-main text-sm"
              />
            </div>
            <div className="border border-border rounded-sm px-3 py-2 focus-within:border-primary transition-colors">
              <input
                type="text"
                name="sector"
                placeholder="Setor:"
                value={state.sector}
                onChange={handleInputChange}
                className="w-full outline-none text-text-main text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-border rounded-sm px-3 py-2 focus-within:border-primary transition-colors">
              <input
                type="text"
                name="driver"
                placeholder="Condutor:"
                value={state.driver}
                onChange={handleInputChange}
                className="w-full outline-none text-text-main text-sm"
              />
            </div>
            <div className="border border-border rounded-sm px-3 py-2 focus-within:border-primary transition-colors">
              <input
                type="text"
                name="registration"
                placeholder="Matrícula:"
                value={state.registration}
                onChange={handleInputChange}
                className="w-full outline-none text-text-main text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="border border-border rounded-sm px-3 py-2 focus-within:border-primary transition-colors">
              <input
                type="text"
                name="plate"
                placeholder="Placa:"
                value={state.plate}
                onChange={handleInputChange}
                className="w-full outline-none text-text-main text-sm"
              />
            </div>
            <div className="border border-border rounded-sm px-3 py-2 focus-within:border-primary transition-colors">
              <input
                type="text"
                name="initialKm"
                placeholder="KM Inicial:"
                value={state.initialKm}
                onChange={handleInputChange}
                className="w-full outline-none text-text-main text-sm"
              />
            </div>
            <div className="border border-border rounded-sm px-3 py-2 focus-within:border-primary transition-colors">
              <input
                type="text"
                name="finalKm"
                placeholder="KM Final:"
                value={state.finalKm}
                onChange={handleInputChange}
                className="w-full outline-none text-text-main text-sm"
              />
            </div>
          </div>

          {/* Photos Section */}
          <div className="grid grid-cols-2 gap-8">
            <PhotoUpload
              label="Foto veiculo Frontal"
              value={state.photos.front}
              onChange={(val) => handlePhotoChange('front', val)}
            />
            <PhotoUpload
              label="Foto veiculo Traseira"
              value={state.photos.rear}
              onChange={(val) => handlePhotoChange('rear', val)}
            />
            <PhotoUpload
              label="Foto veiculo LT Direita"
              value={state.photos.rightSide}
              onChange={(val) => handlePhotoChange('rightSide', val)}
            />
            <PhotoUpload
              label="Foto veiculo LT Esquerda"
              value={state.photos.leftSide}
              onChange={(val) => handlePhotoChange('leftSide', val)}
            />
          </div>

          {/* Checklist Items */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-3">
            <ToggleItem
              label="Faróis"
              active={state.items.headlights}
              onToggle={() => handleToggle('headlights')}
            />
            <ToggleItem
              label="Buzina"
              active={state.items.horn}
              onToggle={() => handleToggle('horn')}
            />
            <ToggleItem
              label="Lanternas"
              active={state.items.taillights}
              onToggle={() => handleToggle('taillights')}
            />
            <ToggleItem
              label="Freios"
              active={state.items.brakes}
              onToggle={() => handleToggle('brakes')}
            />
            <ToggleItem
              label="Luz de Placa"
              active={state.items.plateLight}
              onToggle={() => handleToggle('plateLight')}
            />
            <ToggleItem
              label="Multimídia"
              active={state.items.multimedia}
              onToggle={() => handleToggle('multimedia')}
            />
            <ToggleItem
              label="Extintor"
              active={state.items.extinguisher}
              onToggle={() => handleToggle('extinguisher')}
            />
            <ToggleItem
              label="Macaco"
              active={state.items.jack}
              onToggle={() => handleToggle('jack')}
            />
            <ToggleItem
              label="Cinto de Seg."
              active={state.items.seatbelt}
              onToggle={() => handleToggle('seatbelt')}
            />
            <ToggleItem
              label="Estepe"
              active={state.items.spareTire}
              onToggle={() => handleToggle('spareTire')}
            />
            <ToggleItem
              label="Luz de Ré"
              active={state.items.reverseLight}
              onToggle={() => handleToggle('reverseLight')}
            />
            <ToggleItem
              label="Bateria"
              active={state.items.battery}
              onToggle={() => handleToggle('battery')}
            />
            <ToggleItem
              label="Ar Condic."
              active={state.items.airConditioning}
              onToggle={() => handleToggle('airConditioning')}
            />
            <ToggleItem
              label="Setas"
              active={state.items.turnSignals}
              onToggle={() => handleToggle('turnSignals')}
            />
          </div>

          {/* Levels Section */}
          <div className="space-y-4">
            <LevelSelector
              label="Combustível"
              value={state.fuelLevel}
              onChange={(val) => setState((prev) => ({ ...prev, fuelLevel: val }))}
            />
            <LevelSelector
              label="Água Radiador"
              value={state.waterLevel}
              onChange={(val) => setState((prev) => ({ ...prev, waterLevel: val }))}
            />
          </div>

          {/* Declaration */}
          <div className="border border-border bg-[#FAF9F8] rounded-sm p-3 text-center">
            <p className="text-text-main font-medium text-sm">
              Declaro-me ciente da vericidade de todas as informações acima.
            </p>
          </div>

          {/* Signatures */}
          <div className="space-y-8 flex flex-col items-center">
            <SignaturePad
              label="Assinatura Responsável"
              onSave={(val) => handleSignatureSave('responsible', val)}
            />
            <SignaturePad
              label="Assinatura Condutor"
              onSave={(val) => handleSignatureSave('driver', val)}
            />
          </div>

          {/* Footer / Print */}
          <div className="flex justify-center pt-4 print:hidden">
            <button
              onClick={handlePrint}
              className="text-text-muted hover:text-primary transition-colors p-2"
              title="Imprimir Checklist"
            >
              <Printer size={28} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ToggleItem({ label, active, onToggle }: { label: string; active: boolean; onToggle: () => void }) {
  return (
    <div className="flex items-center gap-4">
      <div className="border border-border bg-[#FAF9F8] rounded-sm px-3 py-1 min-w-[120px] text-text-main font-semibold text-xs uppercase tracking-wider">
        {label}
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={onToggle}
          className={`w-10 h-5 rounded-full relative transition-colors ${
            active ? 'bg-primary' : 'bg-gray-300'
          }`}
        >
          <motion.div
            animate={{ x: active ? 22 : 2 }}
            className="absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-sm"
          />
        </button>
        <span className="text-xs font-medium text-text-muted">{active ? 'Ligar' : 'Ativado'}</span>
      </div>
    </div>
  );
}

function LevelSelector({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (val: any) => void;
}) {
  const levels = ['1/4', '2/4', '3/4', '4/4'];
  return (
    <div className="flex items-center gap-4">
      <div className="border border-border bg-[#FAF9F8] rounded-sm px-3 py-1 min-w-[120px] text-text-main font-semibold text-xs uppercase tracking-wider">
        {label}
      </div>
      <div className="flex gap-6">
        {levels.map((level) => (
          <label key={level} className="flex items-center gap-2 cursor-pointer group">
            <div
              onClick={() => onChange(level)}
              className={`w-5 h-5 border border-border rounded-sm flex items-center justify-center transition-colors ${
                value === level ? 'bg-primary-light border-primary' : 'bg-white'
              }`}
            >
              {value === level && <Check size={14} className="text-primary" strokeWidth={3} />}
            </div>
            <span className="text-xs font-medium text-text-muted">{level}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
