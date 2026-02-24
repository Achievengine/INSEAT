import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';

type FormData = {
  fullName: string;
  restaurantName: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  logo: File | null;
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
      fullName: '',
      restaurantName: '',
      email: '',
      phoneNumber: '',
      companyName: '',
      logo: null
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
      const response = await fetch('http://localhost:3001/api/demo/request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: data.fullName,
          email: data.email,
          phoneNumber: data.phoneNumber,
          restaurantName: data.restaurantName,
          companyName: data.companyName
        })
      });

      const result = await response.json();
      
      if (response.ok && result.success) {
        console.log('Demo created successfully:', result);
        setFormStatus('success');
      } else {
        throw new Error(result.error || 'Failed to create demo account');
      }
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
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Try Inseat For Free</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Create your custom QR code menu in seconds. No credit card required.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form Side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 p-8 rounded-xl backdrop-blur-lg"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Logo Upload */}
                <div>
                  <label className="block text-sm font-medium text-white mb-1">
                    Restaurant Logo
                  </label>
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

                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-white mb-1">
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    className={`w-full px-4 py-2 border border-white/20 rounded-lg bg-white/5 text-white focus:ring-2 focus:ring-primary focus:border-transparent ${errors.fullName ? 'border-primary/50 focus:ring-primary/30' : ''}`}
                    placeholder="e.g., John Doe"
                    {...register('fullName', {
                      required: 'Full name is required',
                      minLength: {
                        value: 2,
                        message: 'Name must be at least 2 characters'
                      }
                    })}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-primary">{errors.fullName.message}</p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-white mb-1">
                    Phone Number <span className="text-primary">*</span>
                  </label>
                  <input
                    id="phoneNumber"
                    type="tel"
                    className={`w-full px-4 py-2 border border-white/20 rounded-lg bg-white/5 text-white focus:ring-2 focus:ring-primary focus:border-transparent ${errors.phoneNumber ? 'border-primary/50 focus:ring-primary/30' : ''}`}
                    placeholder="e.g., +1 (555) 123-4567"
                    {...register('phoneNumber', {
                      required: 'Phone number is required'
                    })}
                  />
                  {errors.phoneNumber && (
                    <p className="mt-1 text-sm text-primary">{errors.phoneNumber.message}</p>
                  )}
                </div>

                {/* Company Name */}
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-white mb-1">
                    Company Name <span className="text-primary">*</span>
                  </label>
                  <input
                    id="companyName"
                    type="text"
                    className={`w-full px-4 py-2 border border-white/20 rounded-lg bg-white/5 text-white focus:ring-2 focus:ring-primary focus:border-transparent ${errors.companyName ? 'border-primary/50 focus:ring-primary/30' : ''}`}
                    placeholder="e.g., Luigi's Restaurant Group"
                    {...register('companyName', {
                      required: 'Company name is required',
                      minLength: {
                        value: 2,
                        message: 'Company name must be at least 2 characters'
                      }
                    })}
                  />
                  {errors.companyName && (
                    <p className="mt-1 text-sm text-primary">{errors.companyName.message}</p>
                  )}
                </div>

                {/* Restaurant Name */}
                <div>
                  <label htmlFor="restaurantName" className="block text-sm font-medium text-white mb-1">
                    Restaurant Name <span className="text-primary">*</span>
                  </label>
                  <input
                    id="restaurantName"
                    type="text"
                    className={`w-full px-4 py-2 border border-white/20 rounded-lg bg-white/5 text-white focus:ring-2 focus:ring-primary focus:border-transparent ${errors.restaurantName ? 'border-primary/50 focus:ring-primary/30' : ''}`}
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
                    <p className="mt-1 text-sm text-primary">{errors.restaurantName.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                    Business Email <span className="text-primary">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={`w-full px-4 py-2 border border-white/20 rounded-lg bg-white/5 text-white focus:ring-2 focus:ring-primary focus:border-transparent ${errors.email ? 'border-primary/50 focus:ring-primary/30' : ''}`}
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
                    <p className="mt-1 text-sm text-primary">{errors.email.message}</p>
                  )}
                </div>

                {/* Submit Button - TEMPORARILY DISABLED */}
                <motion.button
                  type="button"
                  disabled={true}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gray-300 text-gray-500 cursor-not-allowed py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Form Submission Temporarily Disabled
                </motion.button>
              </form>

              {/* Form Status Messages */}
              <AnimatePresence>
                {formStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mt-4 p-3 bg-primary/10 text-primary rounded-lg border border-primary/30 flex items-center"
                  >
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Demo created successfully! Check your email for login credentials and setup instructions.
                  </motion.div>
                )}

                {formStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mt-4 p-3 bg-primary/10 text-primary rounded-lg border border-primary/30 flex items-center"
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
                <h3 className="text-2xl font-bold text-white mb-2">Preview Your QR Menu</h3>
                <p className="text-gray-400">Here's how your customized QR menu will look</p>
              </div>

              {/* QR Menu Preview */}
              <div className="mt-8 bg-white rounded-xl shadow-md p-5 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-800">Preview Your QR Menu</h3>
                </div>
                <div className="flex justify-center">
                  <img 
                    src="/inseat.jpg" 
                    alt="InSeat QR Menu Preview" 
                    className="w-[200px] md:w-[250px] h-auto rounded-3xl shadow-lg"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoForm;
