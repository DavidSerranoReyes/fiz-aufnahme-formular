import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { PhoneInquiryFormData } from '../../types/formTypes';
import { phoneInquiryValidationSchema } from '../../utils/validationSchema';
import PersonalInformationSection from './sections/PersonalInformationSection';
import ResidenceStatusSection from './sections/ResidenceStatusSection';
import LanguageSection from './sections/LanguageSection';
import SupportNeedsSection from './sections/SupportNeedsSection';
import AsylumProcedureSection from './sections/AsylumProcedureSection';
import MaritalStatusSection from './sections/MaritalStatusSection';
import ChildrenInformationSection from './sections/ChildrenInformationSection';
import EmploymentSection from './sections/EmploymentSection';

interface PhoneInquiryFormProps {
  onSubmit: (data: any) => void;
}

const defaultValues = {
  inquiryDate: new Date().toISOString().split('T')[0],
  lastName: '',
  firstName: '',
  aliasName: '',
  placeOfResidence: '',
  phoneNumber: '',
  timeInGermany: '',
  nationality: '',
  residenceStatus: '',
  visaType: '',
  languages: '',
  preferredLanguage: '',
  otherLanguage: '',
  specificSupportNeeds: '',
  acuteThreatSituation: false,
  supportTypes: [] as string[],
  otherSupportType: '',
  asylumProcedureStatus: '',
  asylumProcedureDetails: '',
  maritalStatus: '',
  isMarried: false,
  marriedSince: '',
  partnerResidenceStatus: '',
  hasChildrenInGermany: false,
  numberOfChildren: 0,
  childrenAges: '',
  childrenResidenceStatus: '',
  isWorking: false,
  workingHours: ''
};

const PhoneInquiryForm: React.FC<PhoneInquiryFormProps> = ({ onSubmit }) => {
  const methods = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(phoneInquiryValidationSchema) as any
  });

  const handleSubmit = methods.handleSubmit((data) => {
    onSubmit(data);
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit} className="phone-inquiry-form">
        <h1>Phone Inquiry Form</h1>
        
        <PersonalInformationSection />
        <ResidenceStatusSection />
        <LanguageSection />
        <SupportNeedsSection />
        <AsylumProcedureSection />
        <MaritalStatusSection />
        <ChildrenInformationSection />
        <EmploymentSection />
        
        <div className="form-actions">
          <button type="submit" className="submit-button">
            Submit
          </button>
          <button type="button" className="reset-button" onClick={() => methods.reset()}>
            Reset
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default PhoneInquiryForm;
