import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';

type FormData = {
  restaurantName: string;
  email: string;
};

const DemoForm = () => {
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty }
  } = useForm<FormData>({
    mode: 'onChange',
    defaultValues: {
      restaurantName: '',
      email: ''
    }
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', { ...data, logo: logoPreview });
      setFormStatus('success');
    } catch (error) {
      console.error('Submission error:', error);
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset form status after display
  const resetFormStatus = () => {
    setTimeout(() => {
      if (formStatus !== 'idle') setFormStatus('idle');
    }, 5000);
  };

  if (formStatus === 'success') {
    resetFormStatus();
  }

  return (
    <section id="demo" className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-heading"
          >
            Try Inseat For Free
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-subheading"
          >
            Create your custom QR code menu in seconds. No credit card required.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-secondary mb-6">Your Restaurant Details</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Logo Upload */}
              <div>
                <label className="form-label">Restaurant Logo</label>
                <div className="mt-1 flex items-center space-x-5">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="relative h-24 w-24 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center border-2 border-dashed border-gray-300 cursor-pointer"
                    onClick={triggerFileInput}
                  >
                    {logoPreview ? (
                      <img 
                        src={logoPreview} 
                        alt="Restaurant Logo" 
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <svg className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    )}
                    <input
                      type="file"
                      ref={fileInputRef}
                      className="hidden"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                  </motion.div>
                  <div className="text-sm text-gray-500">
                    <p>Upload your restaurant logo</p>
                    <p className="mt-1">Recommended: 400x400px</p>
                  </div>
                </div>
              </div>

              {/* Restaurant Name */}
              <div>
                <label htmlFor="restaurantName" className="form-label">Restaurant Name</label>
                <input
                  id="restaurantName"
                  type="text"
                  className={`form-input ${errors.restaurantName ? 'border-red-500 focus:ring-red-200' : ''}`}
                  placeholder="e.g., Luigi's Italian Bistro"
                  {...register('restaurantName', {
                    required: 'Restaurant name is required',
                    minLength: {
                      value: 2,
                      message: 'Name must be at least 2 characters'
                    }
                  })}
                />
                {errors.restaurantName && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-1 text-sm text-red-500"
                  >
                    {errors.restaurantName.message}
                  </motion.p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="form-label">Business Email</label>
                <input
                  id="email"
                  type="email"
                  className={`form-input ${errors.email ? 'border-red-500 focus:ring-red-200' : ''}`}
                  placeholder="you@restaurant.com"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-1 text-sm text-red-500"
                  >
                    {errors.email.message}
                  </motion.p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={!isDirty || !isValid || isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all flex items-center justify-center
                  ${isDirty && isValid && !isSubmitting
                    ? 'bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
              >
                {isSubmitting ? (
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : null}
                {isSubmitting ? 'Creating Your Demo...' : 'Create My Free QR Menu'}
              </motion.button>
            </form>

            {/* Form Status Messages */}
            <AnimatePresence>
              {formStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-4 p-3 bg-green-50 text-green-700 rounded-lg border border-green-100 flex items-center"
                >
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Your QR menu demo is ready! Check your email inbox.
                </motion.div>
              )}

              {formStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-4 p-3 bg-red-50 text-red-700 rounded-lg border border-red-100 flex items-center"
                >
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  There was an error creating your demo. Please try again.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Preview Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            <div className="mb-6 text-center">
              <h3 className="text-2xl font-bold text-secondary mb-2">Preview Your QR Menu</h3>
              <p className="text-gray-600">Here's how your customized QR menu will look</p>
            </div>

            {/* Phone Mockup with QR Preview */}
            <motion.div
              whileHover={{ y: -5 }}
              className="relative w-64 md:w-72 mx-auto"
            >
              <div className="relative bg-gray-900 rounded-[40px] p-3 shadow-xl">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-6 bg-gray-900 rounded-b-xl"></div>
                <div className="bg-gradient-to-b from-primary/10 to-white rounded-[28px] overflow-hidden">
                  {/* Phone Content */}
                  <div className="relative pt-10 pb-16">
                    {/* Preview Header */}
                    <div className="px-5 pt-2 pb-4 flex items-center space-x-3">
                      {logoPreview ? (
                        <div className="h-10 w-10 rounded-full overflow-hidden">
                          <img src={logoPreview} alt="Logo" className="h-full w-full object-cover" />
                        </div>
                      ) : (
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                          <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                          </svg>
                        </div>
                      )}
                      <div>
                        <h3 className="font-bold text-secondary">
                          {register('restaurantName').value || 'Your Restaurant'}
                        </h3>
                        <p className="text-xs text-gray-500">Digital Menu & Ordering</p>
                      </div>
                    </div>

                    {/* Menu Categories */}
                    <div className="px-5">
                      <div className="flex space-x-3 overflow-x-auto pb-2">
                        <div className="px-3 py-1 bg-primary/90 text-white rounded-full text-sm whitespace-nowrap">
                          All Items
                        </div>
                        <div className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm whitespace-nowrap">
                          Appetizers
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DemoForm;

