import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Upload, X, Save, FileText, Link as LinkIcon, Pin, Calendar } from 'lucide-react';

const AdminNotificationForm = ({ notification, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: notification?.title || '',
    description: notification?.description || '',
    link: notification?.link || '',
    pinned: notification?.pinned || false,
    expiryDate: notification?.expiryDate || ''
  });

  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // Validate file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/jpeg', 'image/png'];
      if (!allowedTypes.includes(selectedFile.type)) {
        alert('Please select a valid file (PDF, DOC, DOCX, JPG, PNG)');
        return;
      }

      // Validate file size (5MB max)
      if (selectedFile.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }

      setFile(selectedFile);
    }
  };

  const removeFile = () => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      alert('Title is required');
      return;
    }

    setIsUploading(true);

    try {
      let fileUrl = notification?.fileUrl || '';
      let fileName = notification?.fileName || '';

      if (file) {
        // In a real app, you'd upload to a server. For now, we'll simulate with local storage
        // Create a data URL for the file (not recommended for large files in production)
        const reader = new FileReader();
        fileUrl = await new Promise((resolve) => {
          reader.onload = () => resolve(reader.result);
          reader.readAsDataURL(file);
        });
        fileName = file.name;
      }

      const notificationData = {
        ...formData,
        fileUrl,
        fileName
      };

      onSave(notificationData);
    } catch (error) {
      console.error('Error saving notification:', error);
      alert('Error saving notification. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          {notification ? 'Edit Notification' : 'Add New Notification'}
        </h2>
        <button
          onClick={onCancel}
          className="text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Title *
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter notification title"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter notification description (optional)"
          />
        </div>

        {/* Link */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Link (optional)
          </label>
          <div className="relative">
            <LinkIcon className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <input
              type="url"
              name="link"
              value={formData.link}
              onChange={handleInputChange}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="https://example.com"
            />
          </div>
        </div>

        {/* File Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload File (optional)
          </label>
          <div className="space-y-2">
            <input
              ref={fileInputRef}
              type="file"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              className="hidden"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <Upload className="w-4 h-4 mr-2" />
              Choose File
            </button>

            {(file || notification?.fileName) && (
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
                <div className="flex items-center">
                  <FileText className="w-4 h-4 mr-2 text-gray-500" />
                  <span className="text-sm text-gray-700">
                    {file?.name || notification?.fileName}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={removeFile}
                  className="text-red-500 hover:text-red-700"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Supported formats: PDF, DOC, DOCX, JPG, PNG (Max 5MB)
          </p>
        </div>

        {/* Options */}
        <div className="space-y-3">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="pinned"
              name="pinned"
              checked={formData.pinned}
              onChange={handleInputChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="pinned" className="ml-2 flex items-center text-sm text-gray-700">
              <Pin className="w-4 h-4 mr-1" />
              Pin this notification (appears at top)
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expiry Date (optional)
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <input
                type="datetime-local"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleInputChange}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Submit Buttons */}
        <div className="flex justify-end space-x-3 pt-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isUploading}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          >
            <Save className="w-4 h-4 mr-2" />
            {isUploading ? 'Saving...' : 'Save Notification'}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default AdminNotificationForm;
