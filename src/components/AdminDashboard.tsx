"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ContainerScroll } from "./ui/container-scroll-animation";

const AdminDashboard = () => {
  // Active view state
  const [activeView, setActiveView] = useState('analytics');
  
  // Mock data for the dashboard
  const salesData = [
    { day: 'Mon', value: 2400 },
    { day: 'Tue', value: 1398 },
    { day: 'Wed', value: 9800 },
    { day: 'Thu', value: 3908 },
    { day: 'Fri', value: 4800 },
    { day: 'Sat', value: 5800 },
    { day: 'Sun', value: 4300 }
  ];
  
  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'This Year',
        data: [30000, 25000, 36000, 30000, 45000, 39000],
        color: '#006BA6'
      },
      {
        label: 'Last Year',
        data: [23000, 21000, 32000, 25000, 38000, 28000],
        color: '#716A5C'
      }
    ]
  };
  
  const loyaltyStats = {
    newCustomers: 127,
    returningCustomers: 348,
    totalMembers: 1893,
    tierDistribution: [
      { tier: 'Bronze', count: 856, color: '#CD7F32' },
      { tier: 'Silver', count: 623, color: '#C0C0C0' },
      { tier: 'Gold', count: 297, color: '#FFD700' },
      { tier: 'Platinum', count: 117, color: '#E5E4E2' }
    ]
  };
  
  const metricCards = [
    { 
      title: 'Total Revenue', 
      value: '$42,389', 
      change: '+12.5%', 
      positive: true,
      icon: '💰', 
      color: 'bg-blue-50 text-blue-800' 
    },
    { 
      title: 'Average Order', 
      value: '$28.45', 
      change: '+3.2%', 
      positive: true, 
      icon: '🛒',
      color: 'bg-green-50 text-green-800' 
    },
    { 
      title: 'Customer Retention', 
      value: '68.7%', 
      change: '+5.3%', 
      positive: true, 
      icon: '👥',
      color: 'bg-purple-50 text-purple-800' 
    },
    { 
      title: 'Avg. Service Time', 
      value: '14.3m', 
      change: '-1.2m', 
      positive: true, 
      icon: '⏱️',
      color: 'bg-yellow-50 text-yellow-800' 
    }
  ];
  
  const recentUsers = [
    { id: 1, name: 'Alex Johnson', role: 'Manager', location: 'Main Branch', status: 'Active', lastActive: '2 mins ago' },
    { id: 2, name: 'Maria Garcia', role: 'Server', location: 'Main Branch', status: 'Active', lastActive: '15 mins ago' },
    { id: 3, name: 'James Wilson', role: 'Kitchen Staff', location: 'Downtown', status: 'Offline', lastActive: '3 hours ago' },
    { id: 4, name: 'Sarah Lee', role: 'Admin', location: 'Main Branch', status: 'Active', lastActive: '1 min ago' },
    { id: 5, name: 'Robert Chen', role: 'Manager', location: 'Eastside', status: 'Away', lastActive: '45 mins ago' }
  ];
  
  const settingCategories = [
    { 
      id: 'general', 
      title: 'General Settings', 
      description: 'Manage basic application settings', 
      icon: '⚙️',
      options: ['Restaurant Information', 'Branding', 'Operating Hours', 'Locations'] 
    },
    { 
      id: 'integrations', 
      title: 'Integrations', 
      description: 'Connect with third-party services', 
      icon: '🔌',
      options: ['Payment Processors', 'Accounting Software', 'Delivery Services', 'Email Marketing'] 
    },
    { 
      id: 'notifications', 
      title: 'Notifications', 
      description: 'Configure alerts and messages', 
      icon: '🔔',
      options: ['Staff Alerts', 'Customer Messages', 'System Alerts', 'Marketing Notifications'] 
    },
    { 
      id: 'security', 
      title: 'Security & Permissions', 
      description: 'Manage access control and security', 
      icon: '🔒',
      options: ['User Roles', 'Access Control', 'Data Privacy', 'Audit Logs'] 
    }
  ];

  const websiteBuilderSections = [
    {
      id: 'hero-branding',
      title: 'Hero & Branding',
      description: 'Set the bakery identity, hero story, and conversion-focused above-the-fold CTA.',
      status: 'Required',
      enabled: true,
      fields: ['Brand logo', 'Hero headline', 'Hero background image', 'Primary CTA button']
    },
    {
      id: 'about',
      title: 'About Section',
      description: 'Tell Hananeel Pastry\'s story, craftsmanship values, and specialties.',
      status: 'Required',
      enabled: true,
      fields: ['Founder story', 'Bakery mission', 'Craft process highlights', 'Signature promise']
    },
    {
      id: 'menu',
      title: 'Menu Categories & Items',
      description: 'Configure category groups and item cards with pricing, tags, and availability.',
      status: 'Required',
      enabled: true,
      fields: ['Category ordering', 'Item pricing', 'Dietary tags', 'Stock visibility']
    },
    {
      id: 'gallery',
      title: 'Gallery',
      description: 'Showcase product photography for cakes, pastries, and in-store moments.',
      status: 'Recommended',
      enabled: true,
      fields: ['Gallery layout', 'Image captions', 'Featured collection', 'Photo alt text']
    },
    {
      id: 'contact-location',
      title: 'Contact & Location',
      description: 'Expose phone, email, address, and map details for local discovery.',
      status: 'Required',
      enabled: true,
      fields: ['Store address', 'Map link', 'Support email', 'Primary phone']
    },
    {
      id: 'opening-hours',
      title: 'Opening Hours',
      description: 'Define daily business hours and special holiday schedules.',
      status: 'Required',
      enabled: true,
      fields: ['Weekday hours', 'Weekend hours', 'Holiday exceptions', 'Timezone']
    },
    {
      id: 'order-flow',
      title: 'Order Online (Cart & Checkout)',
      description: 'Enable direct ordering with cart controls, checkout methods, and confirmation flow.',
      status: 'Required',
      enabled: true,
      fields: ['Cart rules', 'Checkout fields', 'Payment options', 'Order confirmation']
    },
    {
      id: 'custom-cake-cta',
      title: 'Custom Cake Order CTA',
      description: 'Drive custom cake requests with a dedicated CTA and intake form.',
      status: 'Recommended',
      enabled: true,
      fields: ['CTA copy', 'Inquiry form link', 'Lead destination', 'Response SLA note']
    },
    {
      id: 'lead-capture',
      title: 'Phone/Email Capture',
      description: 'Collect customer contact details for order updates and remarketing.',
      status: 'Required',
      enabled: true,
      fields: ['Email capture', 'Phone capture', 'Consent text', 'CRM routing']
    },
    {
      id: 'call-to-order',
      title: 'Call-to-Order',
      description: 'Display click-to-call actions for customers who prefer phone ordering.',
      status: 'Required',
      enabled: true,
      fields: ['Call button label', 'Order hotline', 'Availability message', 'Fallback routing']
    }
  ];

  const menuCategoryBreakdown = [
    { name: 'Signature Cakes', items: 8, featured: 'Triple Chocolate Celebration' },
    { name: 'Cupcakes & Minis', items: 12, featured: 'Red Velvet Cream Cheese Cupcake' },
    { name: 'Pastries', items: 9, featured: 'Almond Croissant' },
    { name: 'Seasonal Specials', items: 5, featured: 'Strawberry Basque Cheesecake' }
  ];

  const galleryCollections = [
    { title: 'Wedding Cakes', assets: 14, status: 'Live' },
    { title: 'Everyday Pastries', assets: 26, status: 'Live' },
    { title: 'Custom Celebration Cakes', assets: 11, status: 'Needs Review' }
  ];

  const openingHours = [
    { day: 'Monday', hours: '8:00 AM - 8:00 PM', enabled: true },
    { day: 'Tuesday', hours: '8:00 AM - 8:00 PM', enabled: true },
    { day: 'Wednesday', hours: '8:00 AM - 8:00 PM', enabled: true },
    { day: 'Thursday', hours: '8:00 AM - 8:00 PM', enabled: true },
    { day: 'Friday', hours: '8:00 AM - 9:00 PM', enabled: true },
    { day: 'Saturday', hours: '9:00 AM - 9:00 PM', enabled: true },
    { day: 'Sunday', hours: '10:00 AM - 6:00 PM', enabled: true }
  ];

  const orderFlowSteps = [
    { title: 'Browse Menu', detail: 'Customers choose categories and select pastries or cakes.' },
    { title: 'Add to Cart', detail: 'Modifier options and quantities update cart totals in real time.' },
    { title: 'Checkout', detail: 'Pickup or delivery selection with payment and contact capture.' },
    { title: 'Confirmation', detail: 'Order confirmation page shares status and pickup instructions.' }
  ];

  const leadCaptureChannels = [
    { label: 'Email capture on checkout', enabled: true },
    { label: 'Phone capture for order updates', enabled: true },
    { label: 'Newsletter opt-in on custom cake form', enabled: false },
    { label: 'SMS callback consent for call-to-order', enabled: true }
  ];
  
  // Animation variants
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  const navItemVariants = {
    inactive: { color: '#6B7280', opacity: 0.7 },
    active: { color: '#006BA6', opacity: 1, fontWeight: 600 }
  };
  
  return (
    <div className="hidden md:flex flex-col overflow-hidden min-h-screen bg-[#372F7B]">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
             
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                INSEAT Admin
              </span>
            </h1>
          </>
        }
      >
        <div className="px-4 max-w-7xl mx-auto w-full">

        </div>
        
        {/* Dashboard demo */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 mt-4">
          <div className="flex flex-col md:flex-row min-h-[600px]">
            {/* Sidebar navigation */}
            <div className="w-full md:w-72 bg-gray-50 border-r border-gray-200 p-4">
              <div className="flex items-center mb-6 p-2">
                <div className="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center font-bold text-xl">
                  I
                </div>
                <div className="ml-2">
                  <h3 className="font-bold text-gray-900">INSEAT</h3>
                  <p className="text-xs text-gray-500">Admin Panel</p>
                </div>
              </div>
              
              <div className="mb-4 px-3 py-2">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Main</h3>
              </div>
              <nav className="space-y-1 mb-6">
                {[
                  { id: 'analytics', label: 'Dashboard', icon: '📊' },
                  { id: 'reservations', label: 'Reservations', icon: '📅' },
                  { id: 'orders', label: 'Orders', icon: '🍽️' }
                ].map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => setActiveView(item.id)}
                    className={`flex items-center px-3 py-3 w-full rounded-md text-left text-sm transition-colors
                      ${activeView === item.id ? 'bg-blue-50' : 'hover:bg-gray-100'}`}
                    animate={activeView === item.id ? 'active' : 'inactive'}
                    variants={navItemVariants}
                  >
                    <span className="mr-3 text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                    {activeView === item.id && (
                      <motion.div 
                        className="ml-auto w-1.5 h-1.5 rounded-full bg-primary"
                        layoutId="activeIndicator"
                      />
                    )}
                  </motion.button>
                ))}
              </nav>
              
              <div className="mb-4 px-3 py-2">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Management</h3>
              </div>
              <nav className="space-y-1 mb-6">
                {[
                  { id: 'users', label: 'User Management', icon: '👥' },
                  { id: 'menu', label: 'Menu Items', icon: '🍕' },
                  { id: 'inventory', label: 'Inventory', icon: '📦' }
                ].map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => setActiveView(item.id)}
                    className={`flex items-center px-3 py-3 w-full rounded-md text-left text-sm transition-colors
                      ${activeView === item.id ? 'bg-blue-50' : 'hover:bg-gray-100'}`}
                    animate={activeView === item.id ? 'active' : 'inactive'}
                    variants={navItemVariants}
                  >
                    <span className="mr-3 text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                    {activeView === item.id && (
                      <motion.div 
                        className="ml-auto w-1.5 h-1.5 rounded-full bg-primary"
                        layoutId="activeIndicator"
                      />
                    )}
                  </motion.button>
                ))}
              </nav>
              
              <div className="mb-4 px-3 py-2">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Configuration</h3>
              </div>
              <nav className="space-y-1">
                {[
                  { id: 'websiteBuilder', label: 'Website Builder', icon: '🧁' },
                  { id: 'settings', label: 'System Settings', icon: '⚙️' },
                  { id: 'integrations', label: 'Integrations', icon: '🔌' },
                  { id: 'reports', label: 'Reports', icon: '📊' },
                  { id: 'support', label: 'Support', icon: '🎫' }
                ].map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => setActiveView(item.id)}
                    className={`flex items-center px-3 py-3 w-full rounded-md text-left text-sm transition-colors
                      ${activeView === item.id ? 'bg-blue-50' : 'hover:bg-gray-100'}`}
                    animate={activeView === item.id ? 'active' : 'inactive'}
                    variants={navItemVariants}
                  >
                    <span className="mr-3 text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                    {activeView === item.id && (
                      <motion.div 
                        className="ml-auto w-1.5 h-1.5 rounded-full bg-primary"
                        layoutId="activeIndicator"
                      />
                    )}
                  </motion.button>
                ))}
              </nav>
              
              <div className="mt-auto pt-6 border-t border-gray-200 mt-8">
                <div className="flex items-center p-3">
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs font-medium">
                    JD
                  </div>
                  <div className="ml-2">
                    <p className="text-sm font-medium text-gray-700">John Doe</p>
                    <p className="text-xs text-gray-500">Administrator</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main content area */}
            <div className="flex-1 overflow-auto p-6">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    {activeView === 'analytics' && 'Dashboard Overview'}
                    {activeView === 'reservations' && 'Reservations'}
                    {activeView === 'orders' && 'Orders'}
                    {activeView === 'users' && 'User Management'}
                    {activeView === 'menu' && 'Menu Management'}
                    {activeView === 'inventory' && 'Inventory Management'}
                    {activeView === 'websiteBuilder' && 'Website Builder'}
                    {activeView === 'settings' && 'System Settings'}
                    {activeView === 'integrations' && 'Integrations'}
                    {activeView === 'reports' && 'Reports'}
                    {activeView === 'support' && 'Support'}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1.5 text-sm border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
                    Export Data
                  </button>
                  <button className="px-3 py-1.5 text-sm bg-primary text-white rounded-md hover:bg-primary/90">
                    {activeView === 'analytics' && 'Refresh Data'}
                    {activeView === 'reservations' && 'New Reservation'}
                    {activeView === 'orders' && 'View Orders'}
                    {activeView === 'users' && 'Add User'}
                    {activeView === 'menu' && 'New Menu Item'}
                    {activeView === 'inventory' && 'Update Stock'}
                    {activeView === 'websiteBuilder' && 'Publish Website'}
                    {activeView === 'settings' && 'Save Changes'}
                    {activeView === 'integrations' && 'Connect New'}
                    {activeView === 'reports' && 'Generate Report'}
                    {activeView === 'support' && 'New Ticket'}
                  </button>
                </div>
              </div>
              
              <AnimatePresence mode="wait">
                {/* Analytics View */}
                {activeView === 'analytics' && (
                  <motion.div
                    key="analytics"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Metric Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                      {metricCards.map((metric, index) => (
                        <motion.div
                          key={index}
                          variants={itemVariants}
                          initial="hidden"
                          animate="visible"
                          transition={{ delay: index * 0.05 }}
                          className={`${metric.color} rounded-lg p-4 shadow-sm`}
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="text-sm font-medium mb-1">{metric.title}</p>
                              <h3 className="text-2xl font-bold">{metric.value}</h3>
                            </div>
                            <span className="text-2xl">{metric.icon}</span>
                          </div>
                          <div className="mt-2 flex items-center">
                            <span className={`text-xs font-medium ${metric.positive ? 'text-green-600' : 'text-red-600'}`}>
                              {metric.change}
                            </span>
                            <span className="text-xs text-gray-500 ml-1">vs last month</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Revenue and Sales Charts */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                      {/* Revenue Chart */}
                      <motion.div
                        variants={itemVariants}
                        className="bg-white rounded-lg shadow-sm p-4 border border-gray-200"
                      >
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="font-semibold text-gray-700">Revenue (Last 6 Months)</h3>
                          <select className="text-sm border border-gray-300 rounded-md px-2 py-1">
                            <option>Last 6 Months</option>
                            <option>Last Year</option>
                            <option>All Time</option>
                          </select>
                        </div>
                        
                        {/* Placeholder for actual chart */}
                        <div className="h-64 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg flex items-center justify-center">
                          {/* Here you would integrate an actual chart library */}
                          <div className="relative w-full h-full">
                            {/* Chart bars */}
                            {revenueData.datasets[0].data.map((value, index) => {
                              const percentage = (value / 50000) * 100;
                              const prevPercentage = (revenueData.datasets[1].data[index] / 50000) * 100;
                              return (
                                <div 
                                  key={index} 
                                  className="absolute bottom-0 flex items-end" 
                                  style={{ left: `${(index / (revenueData.labels.length - 1)) * 90 + 5}%`, width: '4%' }}
                                >
                                  <div 
                                    className="bg-blue-200 w-full rounded-t-sm mr-0.5"
                                    style={{ height: `${prevPercentage}%`, opacity: 0.6 }}
                                  />
                                  <div 
                                    className="bg-blue-500 w-full rounded-t-sm"
                                    style={{ height: `${percentage}%` }}
                                  />
                                </div>
                              );
                            })}
                            
                            {/* X-axis labels */}
                            <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4">
                              {revenueData.labels.map((label) => (
                                <div key={label} className="text-xs text-gray-500">{label}</div>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        {/* Legend */}
                        <div className="flex justify-center mt-4 space-x-6">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-blue-500 rounded-sm mr-1" />
                            <span className="text-xs text-gray-500">This Year</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-blue-200 rounded-sm mr-1" />
                            <span className="text-xs text-gray-500">Last Year</span>
                          </div>
                        </div>
                      </motion.div>
                      
                      {/* Sales by Day Chart */}
                      <motion.div
                        variants={itemVariants}
                        className="bg-white rounded-lg shadow-sm p-4 border border-gray-200"
                      >
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="font-semibold text-gray-700">Sales by Day (This Week)</h3>
                          <select className="text-sm border border-gray-300 rounded-md px-2 py-1">
                            <option>This Week</option>
                            <option>Last Week</option>
                            <option>Last Month</option>
                          </select>
                        </div>
                        
                        {/* Placeholder for actual chart */}
                        <div className="h-64 bg-gradient-to-r from-green-50 to-green-100 rounded-lg flex items-center justify-center">
                          {/* Simplified bar chart visualization */}
                          <div className="relative w-full h-full flex items-end justify-around px-6 py-4">
                            {salesData.map((day) => {
                              const height = (day.value / 10000) * 100;
                              return (
                                <div key={day.day} className="flex flex-col items-center">
                                  <div 
                                    className="bg-green-500 w-8 rounded-t-sm mb-2"
                                    style={{ height: `${height}%` }}
                                  />
                                  <span className="text-xs text-gray-500">{day.day}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Loyalty Program Stats */}
                    <motion.div
                      variants={itemVariants}
                      className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 mb-8"
                    >
                      <div className="flex justify-between items-center mb-6">
                        <h3 className="font-semibold text-gray-700">Loyalty Program Analytics</h3>
                        <button className="text-sm text-primary font-medium">View Details</button>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                        <div className="text-center">
                          <p className="text-sm text-gray-500 mb-1">Total Members</p>
                          <p className="text-2xl font-bold">{loyaltyStats.totalMembers}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-gray-500 mb-1">New This Month</p>
                          <p className="text-2xl font-bold">{loyaltyStats.newCustomers}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-gray-500 mb-1">Returning Customers</p>
                          <p className="text-2xl font-bold">{loyaltyStats.returningCustomers}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-gray-500 mb-1">Avg. Discount Applied</p>
                          <p className="text-2xl font-bold">14.3%</p>
                        </div>
                      </div>
                      
                      {/* Tier distribution chart */}
                      <h4 className="text-sm font-medium text-gray-700 mb-3">Member Tier Distribution</h4>
                      <div className="h-10 bg-gray-100 rounded-md overflow-hidden flex">
                        {loyaltyStats.tierDistribution.map((tier) => {
                          const width = (tier.count / loyaltyStats.totalMembers) * 100;
                          return (
                            <div 
                              key={tier.tier}
                              style={{ width: `${width}%`, backgroundColor: tier.color }}
                              className="h-full"
                            />
                          );
                        })}
                      </div>
                      <div className="flex justify-between mt-2">
                        {loyaltyStats.tierDistribution.map((tier) => (
                          <div key={tier.tier} className="flex items-center">
                            <div className="w-3 h-3 rounded-sm mr-1" style={{ backgroundColor: tier.color }} />
                            <span className="text-xs text-gray-500">{tier.tier}: {tier.count}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                )}
                
                {/* User Management View */}
                {activeView === 'users' && (
                  <motion.div
                    key="users"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Search and Filter Controls */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                      <div className="relative flex-1">
                        <input 
                          type="text" 
                          placeholder="Search users..." 
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm"
                        />
                        <svg className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                      </div>
                      
                      <div className="flex space-x-3">
                        <select className="border border-gray-300 rounded-md px-2 py-2 text-sm">
                          <option>All Roles</option>
                          <option>Manager</option>
                          <option>Server</option>
                          <option>Kitchen Staff</option>
                          <option>Admin</option>
                        </select>
                        
                        <select className="border border-gray-300 rounded-md px-2 py-2 text-sm">
                          <option>All Locations</option>
                          <option>Main Branch</option>
                          <option>Downtown</option>
                          <option>Eastside</option>
                        </select>
                        
                        <select className="border border-gray-300 rounded-md px-2 py-2 text-sm">
                          <option>All Status</option>
                          <option>Active</option>
                          <option>Away</option>
                          <option>Offline</option>
                        </select>
                      </div>
                    </div>
                    
                    {/* User Table */}
                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden mb-6">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Active</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {recentUsers.map((user) => (
                            <motion.tr 
                              key={user.id}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: user.id * 0.05 }}
                            >
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium mr-3">
                                    {user.name.split(' ').map(n => n[0]).join('')}
                                  </div>
                                  <div className="font-medium text-gray-900">{user.name}</div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.role}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.location}</td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                                  ${user.status === 'Active' 
                                    ? 'bg-green-100 text-green-800' 
                                    : user.status === 'Away' 
                                      ? 'bg-yellow-100 text-yellow-800' 
                                      : 'bg-gray-100 text-gray-800'}`}
                                >
                                  {user.status}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {user.lastActive}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button className="text-primary hover:text-primary/80 mr-3">
                                  Edit
                                </button>
                                <button className="text-gray-500 hover:text-gray-700">
                                  View
                                </button>
                              </td>
                            </motion.tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    
                    {/* Pagination */}
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-700">
                        Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">24</span> users
                      </div>
                      <div className="flex space-x-2">
                        <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                          Previous
                        </button>
                        <button className="px-3 py-1 bg-primary text-white rounded-md text-sm hover:bg-primary/90">
                          Next
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Website Builder View */}
                {activeView === 'websiteBuilder' && (
                  <motion.div
                    key="websiteBuilder"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <motion.div
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      className="bg-white rounded-lg shadow-sm border border-gray-200 p-5"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
                        <div>
                          <h3 className="font-semibold text-gray-800">Hananeel Pastry Website Builder</h3>
                          <p className="text-sm text-gray-500">Configure storefront sections, ordering journey, and lead capture from one place.</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-700">Draft</span>
                          <button className="px-3 py-1.5 text-sm border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">Preview Site</button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Site Name</label>
                          <input
                            type="text"
                            defaultValue="Hananeel Pastry"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Primary CTA Label</label>
                          <input
                            type="text"
                            defaultValue="Order Online"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Order Hotline</label>
                          <input
                            type="text"
                            defaultValue="+1 (404) 555-0148"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                          />
                        </div>
                      </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {websiteBuilderSections.map((section, index) => (
                        <motion.div
                          key={section.id}
                          variants={itemVariants}
                          initial="hidden"
                          animate="visible"
                          transition={{ delay: index * 0.03 }}
                          className="bg-white rounded-lg shadow-sm border border-gray-200 p-4"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h4 className="font-semibold text-gray-800">{section.title}</h4>
                              <p className="text-sm text-gray-500 mt-1">{section.description}</p>
                            </div>
                            <input
                              type="checkbox"
                              defaultChecked={section.enabled}
                              className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded mt-1"
                            />
                          </div>
                          <div className="flex items-center justify-between mt-3">
                            <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                              section.status === 'Required'
                                ? 'bg-blue-100 text-blue-700'
                                : 'bg-emerald-100 text-emerald-700'
                            }`}>
                              {section.status}
                            </span>
                            <button className="text-xs text-primary font-medium hover:underline">Configure Section</button>
                          </div>
                          <div className="mt-3 space-y-1">
                            {section.fields.map((field) => (
                              <div key={field} className="text-xs text-gray-500 flex items-center">
                                <span className="mr-2 text-primary">•</span>
                                <span>{field}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        className="bg-white rounded-lg shadow-sm border border-gray-200 p-4"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-semibold text-gray-800">Menu Categories & Items</h3>
                          <button className="text-sm text-primary font-medium hover:underline">Manage Categories</button>
                        </div>
                        <div className="space-y-3">
                          {menuCategoryBreakdown.map((category) => (
                            <div key={category.name} className="border border-gray-200 rounded-md p-3">
                              <div className="flex items-center justify-between">
                                <h4 className="text-sm font-medium text-gray-800">{category.name}</h4>
                                <span className="text-xs text-gray-500">{category.items} items</span>
                              </div>
                              <p className="text-xs text-gray-500 mt-1">Featured: {category.featured}</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>

                      <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        className="bg-white rounded-lg shadow-sm border border-gray-200 p-4"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-semibold text-gray-800">Gallery Collections</h3>
                          <button className="text-sm text-primary font-medium hover:underline">Upload Assets</button>
                        </div>
                        <div className="space-y-3">
                          {galleryCollections.map((collection) => (
                            <div key={collection.title} className="flex items-center justify-between border border-gray-200 rounded-md p-3">
                              <div>
                                <p className="text-sm font-medium text-gray-800">{collection.title}</p>
                                <p className="text-xs text-gray-500">{collection.assets} photos</p>
                              </div>
                              <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                                collection.status === 'Live'
                                  ? 'bg-emerald-100 text-emerald-700'
                                  : 'bg-amber-100 text-amber-700'
                              }`}>
                                {collection.status}
                              </span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    <motion.div
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      className="bg-white rounded-lg shadow-sm border border-gray-200 p-4"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-gray-800">Contact, Location & Opening Hours</h3>
                        <button className="text-sm text-primary font-medium hover:underline">Edit Contact Details</button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="border border-gray-200 rounded-md p-3">
                          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Location</p>
                          <p className="text-sm text-gray-800 mt-1">210 Bakers Street, Atlanta, GA 30303</p>
                          <p className="text-xs text-gray-500 mt-1">Map link: maps.google.com/hananeel-pastry</p>
                        </div>
                        <div className="border border-gray-200 rounded-md p-3">
                          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Contact</p>
                          <p className="text-sm text-gray-800 mt-1">orders@hananeelpastry.com</p>
                          <p className="text-sm text-gray-800">+1 (404) 555-0148</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                        {openingHours.map((entry) => (
                          <div key={entry.day} className="border border-gray-200 rounded-md px-3 py-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-gray-800">{entry.day}</span>
                              <span className={`w-2 h-2 rounded-full ${entry.enabled ? 'bg-emerald-500' : 'bg-gray-300'}`} />
                            </div>
                            <p className="text-xs text-gray-500 mt-1">{entry.hours}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      className="bg-white rounded-lg shadow-sm border border-gray-200 p-4"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-gray-800">Order Online Flow (Cart & Checkout)</h3>
                        <button className="text-sm text-primary font-medium hover:underline">Configure Checkout</button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-4">
                        {orderFlowSteps.map((step, index) => (
                          <div key={step.title} className="border border-gray-200 rounded-md p-3">
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold mb-2">
                              {index + 1}
                            </span>
                            <h4 className="text-sm font-medium text-gray-800">{step.title}</h4>
                            <p className="text-xs text-gray-500 mt-1">{step.detail}</p>
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="border border-gray-200 rounded-md p-3">
                          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Cart Rules</p>
                          <p className="text-sm text-gray-800 mt-1">Minimum order: $18.00</p>
                          <p className="text-xs text-gray-500">Item notes and quantity editing enabled.</p>
                        </div>
                        <div className="border border-gray-200 rounded-md p-3">
                          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Checkout</p>
                          <p className="text-sm text-gray-800 mt-1">Pickup, curbside, and local delivery</p>
                          <p className="text-xs text-gray-500">Address validation and tax summary enabled.</p>
                        </div>
                        <div className="border border-gray-200 rounded-md p-3">
                          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Payments</p>
                          <p className="text-sm text-gray-800 mt-1">Card, Apple Pay, and cash on pickup</p>
                          <p className="text-xs text-gray-500">Payment capture on checkout submission.</p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      className="bg-white rounded-lg shadow-sm border border-gray-200 p-4"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-gray-800">Custom Cake CTA + Lead Capture + Call-to-Order</h3>
                        <button className="text-sm text-primary font-medium hover:underline">Edit CTA Rules</button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border border-gray-200 rounded-md p-3">
                          <h4 className="text-sm font-medium text-gray-800">Custom Cake Order CTA</h4>
                          <p className="text-xs text-gray-500 mt-1">Button label: Request a Custom Cake</p>
                          <p className="text-xs text-gray-500">Routing: /custom-cake-order</p>
                          <div className="mt-3 space-y-2">
                            {leadCaptureChannels.map((channel) => (
                              <label key={channel.label} className="flex items-center justify-between text-sm text-gray-700">
                                <span>{channel.label}</span>
                                <input
                                  type="checkbox"
                                  defaultChecked={channel.enabled}
                                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                                />
                              </label>
                            ))}
                          </div>
                        </div>
                        <div className="border border-gray-200 rounded-md p-3">
                          <h4 className="text-sm font-medium text-gray-800">Call-to-Order</h4>
                          <p className="text-xs text-gray-500 mt-1">Visible in hero, sticky footer, and checkout help panel.</p>
                          <div className="mt-3 space-y-2">
                            <div>
                              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Button Label</label>
                              <input
                                type="text"
                                defaultValue="Call to Order Now"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Phone Number</label>
                              <input
                                type="text"
                                defaultValue="+1 (404) 555-0148"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                              />
                            </div>
                            <div className="bg-blue-50 border border-blue-100 rounded-md p-2">
                              <p className="text-xs text-blue-700">Call center window: Monday-Saturday, 8:00 AM to 9:00 PM</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
                
                {/* Settings View */}
                {activeView === 'settings' && (
                  <motion.div
                    key="settings"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    {settingCategories.map((category, index) => (
                      <motion.div
                        key={category.id}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: index * 0.1 }}
                        className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                      >
                        <div className="p-4 border-b border-gray-200 flex items-center">
                          <span className="text-2xl mr-3">{category.icon}</span>
                          <div>
                            <h3 className="font-semibold text-gray-800">{category.title}</h3>
                            <p className="text-sm text-gray-500">{category.description}</p>
                          </div>
                        </div>
                        
                        <div className="p-4">
                          <ul className="space-y-3">
                            {category.options.map((option, optIndex) => (
                              <motion.li
                                key={optIndex}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 + (optIndex * 0.05) }}
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center">
                                    <input
                                      id={`${category.id}-${optIndex}`}
                                      type="checkbox"
                                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                                    />
                                    <label htmlFor={`${category.id}-${optIndex}`} className="ml-2 block text-sm text-gray-700">
                                      {option}
                                    </label>
                                  </div>
                                  <button className="text-xs text-gray-500 hover:text-primary">
                                    Configure
                                  </button>
                                </div>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 px-4 py-3 border-t border-gray-200">
                          <button className="text-sm text-primary font-medium hover:underline">
                            Manage {category.title}
                          </button>
                        </div>
                      </motion.div>
                    ))}
                    
                    {/* Advanced Settings Card */}
                    <motion.div
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 0.4 }}
                      className="md:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 p-4"
                    >
                      <h3 className="font-semibold text-gray-800 mb-4">Advanced Configuration</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Time Zone
                          </label>
                          <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
                            <option>Eastern Time (UTC-05:00)</option>
                            <option>Central Time (UTC-06:00)</option>
                            <option>Mountain Time (UTC-07:00)</option>
                            <option>Pacific Time (UTC-08:00)</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Date Format
                          </label>
                          <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
                            <option>MM/DD/YYYY</option>
                            <option>DD/MM/YYYY</option>
                            <option>YYYY-MM-DD</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Currency
                          </label>
                          <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
                            <option>USD ($)</option>
                            <option>EUR (€)</option>
                            <option>GBP (£)</option>
                            <option>CAD (C$)</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">System Maintenance</h4>
                        <div className="flex items-center space-x-4">
                          <button className="px-3 py-1.5 text-sm border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50 flex items-center">
                            <span className="mr-1">🔄</span> Run System Diagnostics
                          </button>
                          <button className="px-3 py-1.5 text-sm border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50 flex items-center">
                            <span className="mr-1">📦</span> Backup Data
                          </button>
                          <button className="px-3 py-1.5 text-sm border border-red-300 rounded-md text-red-600 hover:bg-red-50 flex items-center">
                            <span className="mr-1">🧹</span> Clear Cache
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
            </ContainerScroll>
    </div>
  );
};

export default AdminDashboard;
