import React from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import TextField from '../../common/TextField';
import RadioGroup from '../../common/RadioGroup';

const ResidenceStatusSection: React.FC = () => {
  const { control } = useFormContext();
  const residenceStatus = useWatch({
    control,
    name: 'residenceStatus',
    defaultValue: ''
  });

  const residenceStatusOptions = [
    { value: 'illegal', label: 'Illegal' },
    { value: 'toleration', label: 'Toleration' },
    { value: 'temporaryResidencePermit', label: 'Temporary Residence Permit (in asylum or appeal procedure)' },
    { value: 'residencePermit', label: 'Residence Permit' },
    { value: 'settlementPermit', label: 'Settlement Permit' }
  ];

  return (
    <div className="form-section">
      <h2>Residence Status</h2>
      
      <div className="form-row">
        <RadioGroup
          name="residenceStatus"
          label="Residence Status (What visa are you here with?)"
          options={residenceStatusOptions}
          required
        />
      </div>
      
      {residenceStatus === 'residencePermit' && (
        <div className="form-row">
          <TextField 
            name="visaType" 
            label="Residence Permit (§)" 
            placeholder="Enter residence permit details" 
            required
          />
        </div>
      )}
    </div>
  );
};

export default ResidenceStatusSection;
