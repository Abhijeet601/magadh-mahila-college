import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Bell, Plus, Edit, Trash2, LogOut, Eye, EyeOff } from 'lucide-react';
import AdminNotificationForm from '@/components/AdminNotificationForm';
import {
  getNotifications,
  addNotification,
  updateNotification,
  deleteNotification
} from '@/services/notifications';

// List of notices from the folder
const NOTICE_FILES = [
  'Auction-Notice-for-unserviceable-items-of-Awantika-Matrayee-Hostel.pdf',
  'NIQ for the supply of books for the central library of MMC.pdf',
  'NIQ-for-Physics-Equipment-and-consumables.pdf',
  'Niq-for-website.pdf',
  'NIQ-No-P-MMC-956-dated-10.12.2025-Repair-of-False-ceiling-of-room-number-7580818285-and-verandah-at-second-floor-of-MMC.pdf',
  'NIQ-No.P-MMC-957-Dated-10.12.2025-Re-roofing-of-both-staircases-of-vocational-building-of-MM-College.pdf',
  'NIQ-No.P-MMC-958-dated-10.12.2025-Fixing-of-aluminium-windows-in-the-B.C.A-department-of-MMC.pdf',
  'Notice for admission in hostel.jpeg',
  'Notice-for-Awantika-Hostel-demolishing-material-Auction.pdf',
  'Quotation Invited for Repair and painting at Department of Music.pdf'
];

const ADMIN_PASSWORD = 'admin123'; // In production, use proper authentication

const Admin = () => {
  const { t } = useTranslation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingNotification, setEditingNotification] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if already authenticated
    const authStatus = localStorage.getItem('mmc_admin_auth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
      loadNotifications();
    }
  }, []);

  const loadNotifications = () => {
    const allNotifications = getNotifications();
    setNotifications(allNotifications);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem('mmc_admin_auth', 'true');
      loadNotifications();
    } else {
      alert(t('admin.invalidPassword'));
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
    localStorage.removeItem('mmc_admin_auth');
  };

  const handleSaveNotification = async (notificationData) => {
    setLoading(true);
    try {
      if (editingNotification) {
        const updated = updateNotification(editingNotification.id, notificationData);
        if (updated) {
          loadNotifications();
          setShowForm(false);
          setEditingNotification(null);
          alert(t('admin.notificationSaved'));
        }
      } else {
        const newNotification = addNotification(notificationData);
        if (newNotification) {
          loadNotifications();
          setShowForm(false);
          alert(t('admin.notificationSaved'));
        }
      }
    } catch (error) {
      console.error('Error saving notification:', error);
      alert('Error saving notification');
    } finally {
      setLoading(false);
    }
  };

  const handleEditNotification = (notification) => {
    setEditingNotification(notification);
    setShowForm(true);
  };

  const handleDeleteNotification = (id) => {
    if (window.confirm(t('admin.confirmDelete'))) {
      if (deleteNotification(id)) {
        loadNotifications();
        alert(t('admin.notificationDeleted'));
      }
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleImportNotices = () => {
    if (window.confirm('Import notices from the Notice folder? This will add all notices to the board.')) {
      NOTICE_FILES.forEach(file => {
        const title = file.replace(/-/g, ' ').replace(/\.(pdf|jpeg)$/i, '').replace(/\s+/g, ' ').trim();
        const link = `/documents/notices/${file}`;
        const notificationData = {
          title,
          description: '',
          link,
          fileUrl: link,
          fileName: file,
          pinned: false
        };
        addNotification(notificationData);
      });
      loadNotifications();
      alert('Notices imported successfully!');
    }
  };

  const handleResetToDefaults = () => {
    if (window.confirm('Reset to default notices from folder? This will replace all current notices.')) {
      localStorage.setItem('mmc_notifications', JSON.stringify(NOTICE_FILES.map((file, index) => ({
        id: `default-${index + 1}`,
        title: file.replace(/-/g, ' ').replace(/\.(pdf|jpeg)$/i, '').replace(/\s+/g, ' ').trim(),
        description: '',
        link: `/documents/notices/${file}`,
        fileUrl: `/documents/notices/${file}`,
        fileName: file,
        published: true,
        pinned: false,
        expiryDate: null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }))));
      loadNotifications();
      alert('Notices reset to defaults successfully!');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <Helmet>
          <title>{t('admin.title')}</title>
          <meta name="description" content={t('admin.metaDescription')} />
        </Helmet>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full space-y-8"
        >
          <div>
            <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-blue-100">
              <Bell className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              {t('admin.loginTitle')}
            </h2>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="password" className="sr-only">
                {t('admin.passwordPlaceholder')}
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 pr-10 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder={t('admin.passwordPlaceholder')}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-400" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {t('admin.loginButton')}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{t('admin.title')}</title>
        <meta name="description" content={t('admin.metaDescription')} />
      </Helmet>

      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Bell className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">
                {t('admin.dashboardTitle')}
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => {
                  setShowForm(true);
                  setEditingNotification(null);
                }}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Plus className="h-4 w-4 mr-2" />
                {t('admin.addNotification')}
              </button>
              <button
                onClick={handleImportNotices}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Import Notices
              </button>
              <button
                onClick={handleResetToDefaults}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Reset to Defaults
              </button>
              <button
                onClick={handleLogout}
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <LogOut className="h-4 w-4 mr-2" />
                {t('admin.logoutButton')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {showForm ? (
          <AdminNotificationForm
            notification={editingNotification}
            onSave={handleSaveNotification}
            onCancel={() => {
              setShowForm(false);
              setEditingNotification(null);
            }}
          />
        ) : (
          <div className="px-4 py-6 sm:px-0">
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
              <ul className="divide-y divide-gray-200">
                {notifications.length === 0 ? (
                  <li className="px-6 py-8 text-center text-gray-500">
                    {t('admin.noNotifications')}
                  </li>
                ) : (
                  notifications.map((notification) => (
                    <li key={notification.id} className="px-6 py-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center">
                            <p className="text-lg font-medium text-gray-900 truncate">
                              {notification.title}
                            </p>
                            {notification.pinned && (
                              <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                Pinned
                              </span>
                            )}
                            {!notification.published && (
                              <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                Draft
                              </span>
                            )}
                          </div>
                          {notification.description && (
                            <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                              {notification.description}
                            </p>
                          )}
                          <div className="mt-2 flex items-center text-sm text-gray-500">
                            <span>Created: {formatDate(notification.createdAt)}</span>
                            {notification.expiryDate && (
                              <span className="ml-4">
                                Expires: {formatDate(notification.expiryDate)}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 ml-4">
                          <button
                            onClick={() => handleEditNotification(notification)}
                            className="text-blue-600 hover:text-blue-900 p-1"
                          >
                            <Edit className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteNotification(notification.id)}
                            className="text-red-600 hover:text-red-900 p-1"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
