import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Vapi from '@vapi-ai/web';

interface ReservationForm {
  guestName: string;
  phoneNumber: string;
  email: string;
  numberOfPeople: number;
  preferredDate: string;
  preferredTime: string;
  specialRequests: string;
}

const ReservationCallReceptionist = () => {
  const [activeTab, setActiveTab] = useState<'book' | 'call'>('call');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isCallActive, setIsCallActive] = useState(false);
  const [callStatus, setCallStatus] = useState<'idle' | 'connecting' | 'connected' | 'ended'>('idle');
  const [formData, setFormData] = useState<ReservationForm>({
    guestName: '',
    phoneNumber: '',
    email: '',
    numberOfPeople: 2,
    preferredDate: '',
    preferredTime: '',
    specialRequests: ''
  });

  const callButtonRef = useRef<HTMLButtonElement>(null);
  const vapiRef = useRef<any>(null);

  useEffect(() => {
    const publicKey = import.meta.env.VITE_VAPI_PUBLIC_KEY;

    if (publicKey && publicKey !== 'your-vapi-public-key') {
      try {
        vapiRef.current = new Vapi(publicKey);
        console.log('✅ Vapi instance initialized');
      } catch (error) {
        console.error('❌ Failed to initialize Vapi:', error);
      }
    } else {
      console.error('❌ Vapi public key not configured');
    }

    return () => {
      if (vapiRef.current) {
        try {
          vapiRef.current.stop();
        } catch (error) {
          console.log('Cleanup error:', error);
        }
      }
    };
  }, []);

  const callFeatures = [
    {
      title: 'AI-Powered Assistant',
      description: 'Our intelligent virtual agent understands natural language and provides human-like conversation'
    },
    {
      title: 'Real-time Availability',
      description: 'Check table availability instantly and secure your preferred time slot immediately'
    },
    {
      title: 'Secure & Private',
      description: 'Your personal information is protected with enterprise-grade security protocols'
    },
    {
      title: 'Instant Confirmation',
      description: 'Receive immediate booking confirmation via SMS and email after your call'
    },
    {
      title: 'Multi-language Support',
      description: 'Communicate in your preferred language with our multilingual AI assistant'
    },
    {
      title: '24/7 Availability',
      description: 'Make reservations any time of day or night, even outside restaurant hours'
    }
  ];

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reservation form submitted:', formData);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      alert('Reservation request submitted successfully! We will contact you soon to confirm.');
      setIsFormOpen(false);
      setFormData({
        guestName: '',
        phoneNumber: '',
        email: '',
        numberOfPeople: 2,
        preferredDate: '',
        preferredTime: '',
        specialRequests: ''
      });
    } catch (error) {
      alert('Sorry, there was an error submitting your reservation. Please try again.');
    }
  };

  const handleCallReceptionist = async () => {
    setIsCallActive(true);
    setCallStatus('connecting');

    try {
      if (!vapiRef.current) {
        throw new Error('Vapi not initialized. Please refresh the page and try again.');
      }

      const publicKey = import.meta.env.VITE_VAPI_PUBLIC_KEY;

      if (!publicKey || publicKey === 'your-vapi-public-key') {
        throw new Error('Vapi public key not configured. Please contact support.');
      }

      const assistantId = '44be3d7c-7e08-4367-9fc0-2bfb218ae000';
      await vapiRef.current.start(assistantId);
      setCallStatus('connected');

      vapiRef.current.on('call-end', () => {
        setCallStatus('ended');
        setTimeout(() => {
          setIsCallActive(false);
          setCallStatus('idle');
        }, 3000);
      });

      vapiRef.current.on('error', () => {
        setCallStatus('ended');
        setTimeout(() => {
          setIsCallActive(false);
          setCallStatus('idle');
        }, 2000);
      });
    } catch (error: any) {
      console.error('💥 Voice call failed:', error);
      setCallStatus('ended');

      let errorMessage = 'Sorry, our AI agent is currently unavailable. ';

      if (error.message?.includes('not initialized')) {
        errorMessage += 'Please refresh the page and try again.';
      } else if (error.message?.includes('public key') || error.message?.includes('authentication')) {
        errorMessage += 'Please contact support.';
      } else if (error.message?.includes('microphone') || error.message?.includes('permission')) {
        errorMessage += 'Please allow microphone access and try again.';
      } else {
        errorMessage += 'Please try the online form or call back later.';
      }

      alert(errorMessage);
      setTimeout(() => {
        setIsCallActive(false);
        setCallStatus('idle');
      }, 2000);
    }
  };

  const handleFormChange = (field: keyof ReservationForm, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="reservations" className="relative overflow-hidden bg-black py-16 text-white md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(97,6,235,0.24),transparent_44%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(97,6,235,0.16),transparent_42%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="container-custom relative z-10">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="section-heading"
          >
            Smart Reservation System
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="section-subheading text-white/75"
          >
            Book your table instantly with our AI-powered call agent or use our convenient online form.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
          <div className="relative overflow-hidden rounded-[30px] border border-primary/35 bg-black p-5 shadow-[0_30px_65px_-35px_rgba(97,6,235,0.85)] md:p-7">
            <div className="pointer-events-none absolute -right-14 -top-14 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-primary/14 blur-3xl" />
            <div className="relative z-10">
              <div className="mb-4 grid grid-cols-2 gap-2 rounded-2xl border border-white/15 bg-white/[0.03] p-2">
                <button
                  onClick={() => setActiveTab('call')}
                  className={`rounded-xl border px-4 py-3 text-left transition-colors ${
                    activeTab === 'call'
                      ? 'border-primary bg-primary/25 text-white'
                      : 'border-white/15 bg-black/65 text-white/75 hover:text-white'
                  }`}
                >
                  <p className="text-xs font-semibold tracking-[0.16em] text-primary">MODE 01</p>
                  <p className="mt-1 text-sm font-semibold">AI Call Receptionist</p>
                </button>
                <button
                  onClick={() => setActiveTab('book')}
                  className={`rounded-xl border px-4 py-3 text-left transition-colors ${
                    activeTab === 'book'
                      ? 'border-primary bg-primary/25 text-white'
                      : 'border-white/15 bg-black/65 text-white/75 hover:text-white'
                  }`}
                >
                  <p className="text-xs font-semibold tracking-[0.16em] text-primary">MODE 02</p>
                  <p className="mt-1 text-sm font-semibold">Online Form</p>
                </button>
              </div>

              <AnimatePresence mode="wait">
                {activeTab === 'book' && (
                  <motion.div
                    key="book"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.25 }}
                    className="rounded-3xl border border-white/15 bg-white/[0.03] p-7"
                  >
                    <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary">ONLINE FORM</p>
                    <h3 className="mb-2 text-3xl font-bold">Quick Online Reservation</h3>
                    <p className="mb-7 max-w-xl text-white/75">Fill out our simple form and we'll confirm your reservation within minutes.</p>
                    <div className="flex flex-wrap items-center gap-3">
                      <motion.button
                        onClick={() => setIsFormOpen(true)}
                        className="rounded-full bg-primary px-7 py-3 font-semibold text-white transition-colors hover:bg-primary/90"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        Book Table Now
                      </motion.button>
                      <span className="rounded-full border border-white/20 bg-black/60 px-4 py-2 text-xs font-medium text-white/75">Fast confirmation workflow</span>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'call' && (
                  <motion.div
                    key="call"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.25 }}
                    className="rounded-3xl border border-primary/35 bg-white/[0.03] p-7"
                  >
                    <div className="mb-5 flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-primary/60 bg-primary/20 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-primary">AI CALL RECEPTIONIST</span>
                      <span className="rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[11px] font-semibold tracking-[0.14em] text-white/72">
                        STATUS {callStatus.toUpperCase()}
                      </span>
                    </div>

                    <h3 className="mb-2 text-3xl font-bold">Call our AI agent</h3>
                    <p className="mb-7 max-w-xl text-white/75">
                      {callStatus === 'idle' && 'Instantly book your table with our AI assistant'}
                      {callStatus === 'connecting' && 'Connecting you to our AI agent...'}
                      {callStatus === 'connected' && 'You are now connected! Our AI agent is ready to help you make your reservation.'}
                      {callStatus === 'ended' && 'Call ended. Thank you for using our AI agent service!'}
                    </p>

                    <motion.button
                      ref={callButtonRef}
                      onClick={handleCallReceptionist}
                      disabled={isCallActive}
                      className={`rounded-full px-8 py-3 text-lg font-semibold transition-colors ${
                        isCallActive ? 'cursor-not-allowed bg-white/20 text-white/60' : 'bg-primary text-white hover:bg-primary/90'
                      }`}
                      whileHover={!isCallActive ? { scale: 1.03 } : {}}
                      whileTap={!isCallActive ? { scale: 0.97 } : {}}
                    >
                      {callStatus === 'idle' && 'Call AI Reservation assistant'}
                      {callStatus === 'connecting' && 'Connecting...'}
                      {callStatus === 'connected' && 'Call in Progress'}
                      {callStatus === 'ended' && 'Call Ended'}
                    </motion.button>

                    {isCallActive && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-5 max-w-md rounded-xl border border-primary/40 bg-primary/15 p-3">
                        <div className="flex items-center gap-2 text-primary">
                          <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1 }} className="inline-block h-2.5 w-2.5 rounded-full bg-primary" />
                          <span className="text-sm font-medium">Live Call - Our AI agent is listening...</span>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-[30px] border border-white/15 bg-white/[0.03] p-5"
          >
            <p className="text-xs font-semibold tracking-[0.18em] text-primary">RESERVATION ADVANTAGES</p>
            <h3 className="mt-3 text-2xl font-bold text-white">Why Choose Our Smart Reservation System?</h3>
            <div className="relative mt-4 space-y-4">
              <div className="absolute bottom-2 left-3 top-2 w-px bg-white/15" />
              {callFeatures.map((feature, index) => (
                <div key={index} className="relative pl-10">
                  <div className="absolute left-0 top-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-primary/60 bg-primary/18 text-xs font-bold text-primary">
                    {index + 1}
                  </div>
                  <h4 className="text-sm font-semibold text-white">{feature.title}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-white/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>

      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
            onClick={() => setIsFormOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-6 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-2xl font-bold text-secondary">Make a Reservation</h3>
                <button onClick={() => setIsFormOpen(false)} className="text-black/50 hover:text-black">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="form-label">Guest Name *</label>
                  <input type="text" required value={formData.guestName} onChange={(e) => handleFormChange('guestName', e.target.value)} className="form-input" placeholder="Enter your full name" />
                </div>

                <div>
                  <label className="form-label">Phone Number *</label>
                  <input type="tel" required value={formData.phoneNumber} onChange={(e) => handleFormChange('phoneNumber', e.target.value)} className="form-input" placeholder="+1 (555) 123-4567" />
                </div>

                <div>
                  <label className="form-label">Email</label>
                  <input type="email" value={formData.email} onChange={(e) => handleFormChange('email', e.target.value)} className="form-input" placeholder="your@email.com" />
                </div>

                <div>
                  <label className="form-label">Number of People *</label>
                  <select required value={formData.numberOfPeople} onChange={(e) => handleFormChange('numberOfPeople', parseInt(e.target.value, 10))} className="form-input">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="form-label">Preferred Date *</label>
                    <input type="date" required value={formData.preferredDate} onChange={(e) => handleFormChange('preferredDate', e.target.value)} min={new Date().toISOString().split('T')[0]} className="form-input" />
                  </div>
                  <div>
                    <label className="form-label">Preferred Time *</label>
                    <input type="time" required value={formData.preferredTime} onChange={(e) => handleFormChange('preferredTime', e.target.value)} className="form-input" />
                  </div>
                </div>

                <div>
                  <label className="form-label">Special Requests</label>
                  <textarea rows={3} value={formData.specialRequests} onChange={(e) => handleFormChange('specialRequests', e.target.value)} className="form-input" placeholder="Any dietary restrictions, seating preferences, or special occasions..." />
                </div>

                <div className="flex gap-3 pt-2">
                  <button type="button" onClick={() => setIsFormOpen(false)} className="flex-1 rounded-lg border border-black/20 px-4 py-2.5 font-medium text-black/80 hover:bg-black/5">Cancel</button>
                  <button type="submit" className="flex-1 rounded-lg bg-primary px-4 py-2.5 font-semibold text-white hover:bg-primary/90">Submit Reservation</button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ReservationCallReceptionist;
