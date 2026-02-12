// Notification service for managing notifications using localStorage
const NOTIFICATIONS_KEY = 'mmc_notifications';

// List of default notices from the folder
const DEFAULT_NOTICES = [
  {
    id: 'default-1',
    title: 'Anti Ragging Committee 2024',
    description: '',
    link: '/documents/notices/Anti-Ragging-Committee-2024.pdf',
    fileUrl: '/documents/notices/Anti-Ragging-Committee-2024.pdf',
    fileName: 'Anti-Ragging-Committee-2024.pdf',
    published: true,
    pinned: false,
    expiryDate: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'default-2',
    title: 'Auction Notice for Unserviceable Items of Awantika Matrayee Hostel',
    description: '',
    link: '/documents/notices/Auction-Notice-for-unserviceable-items-of-Awantika-Matrayee-Hostel.pdf',
    fileUrl: '/documents/notices/Auction-Notice-for-unserviceable-items-of-Awantika-Matrayee-Hostel.pdf',
    fileName: 'Auction-Notice-for-unserviceable-items-of-Awantika-Matrayee-Hostel.pdf',
    published: true,
    pinned: false,
    expiryDate: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'default-3',
    title: 'NIQ for Physics Equipment and Consumables',
    description: '',
    link: '/documents/notices/NIQ-for-Physics-Equipment-and-consumables.pdf',
    fileUrl: '/documents/notices/NIQ-for-Physics-Equipment-and-consumables.pdf',
    fileName: 'NIQ-for-Physics-Equipment-and-consumables.pdf',
    published: true,
    pinned: false,
    expiryDate: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'default-4',
    title: 'Niq for Website',
    description: '',
    link: '/documents/notices/Niq-for-website.pdf',
    fileUrl: '/documents/notices/Niq-for-website.pdf',
    fileName: 'Niq-for-website.pdf',
    published: true,
    pinned: false,
    expiryDate: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'default-5',
    title: 'NIQ No P MMC 956 dated 10.12.2025 Repair of False ceiling of room number 7580818285 and verandah at second floor of MMC',
    description: '',
    link: '/documents/notices/NIQ-No-P-MMC-956-dated-10.12.2025-Repair-of-False-ceiling-of-room-number-7580818285-and-verandah-at-second-floor-of-MMC.pdf',
    fileUrl: '/documents/notices/NIQ-No-P-MMC-956-dated-10.12.2025-Repair-of-False-ceiling-of-room-number-7580818285-and-verandah-at-second-floor-of-MMC.pdf',
    fileName: 'NIQ-No-P-MMC-956-dated-10.12.2025-Repair-of-False-ceiling-of-room-number-7580818285-and-verandah-at-second-floor-of-MMC.pdf',
    published: true,
    pinned: false,
    expiryDate: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'default-6',
    title: 'NIQ No.P MMC 957 Dated 10.12.2025 Re roofing of both staircases of vocational building of MM College',
    description: '',
    link: '/documents/notices/NIQ-No.P-MMC-957-Dated-10.12.2025-Re-roofing-of-both-staircases-of-vocational-building-of-MM-College.pdf',
    fileUrl: '/documents/notices/NIQ-No.P-MMC-957-Dated-10.12.2025-Re-roofing-of-both-staircases-of-vocational-building-of-MM-College.pdf',
    fileName: 'NIQ-No.P-MMC-957-Dated-10.12.2025-Re-roofing-of-both-staircases-of-vocational-building-of-MM-College.pdf',
    published: true,
    pinned: false,
    expiryDate: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'default-7',
    title: 'NIQ No.P MMC 958 dated 10.12.2025 Fixing of aluminium windows in the B.C.A department of MMC',
    description: '',
    link: '/documents/notices/NIQ-No.P-MMC-958-dated-10.12.2025-Fixing-of-aluminium-windows-in-the-B.C.A-department-of-MMC.pdf',
    fileUrl: '/documents/notices/NIQ-No.P-MMC-958-dated-10.12.2025-Fixing-of-aluminium-windows-in-the-B.C.A-department-of-MMC.pdf',
    fileName: 'NIQ-No.P-MMC-958-dated-10.12.2025-Fixing-of-aluminium-windows-in-the-B.C.A-department-of-MMC.pdf',
    published: true,
    pinned: false,
    expiryDate: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'default-8',
    title: 'NIRF 2025',
    description: '',
    link: '/documents/notices/NIRF 2025.pdf',
    fileUrl: '/documents/notices/NIRF 2025.pdf',
    fileName: 'NIRF 2025.pdf',
    published: true,
    pinned: false,
    expiryDate: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'default-9',
    title: 'Notice for admission in hostel',
    description: '',
    link: '/documents/notices/Notice for admission in hostel.jpeg',
    fileUrl: '/documents/notices/Notice for admission in hostel.jpeg',
    fileName: 'Notice for admission in hostel.jpeg',
    published: true,
    pinned: false,
    expiryDate: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'default-10',
    title: 'Notice for Awantika Hostel demolishing material Auction (1)',
    description: '',
    link: '/documents/notices/Notice-for-Awantika-Hostel-demolishing-material-Auction (1).pdf',
    fileUrl: '/documents/notices/Notice-for-Awantika-Hostel-demolishing-material-Auction (1).pdf',
    fileName: 'Notice-for-Awantika-Hostel-demolishing-material-Auction (1).pdf',
    published: true,
    pinned: false,
    expiryDate: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'default-11',
    title: 'Notice for Awantika Hostel demolishing material Auction',
    description: '',
    link: '/documents/notices/Notice-for-Awantika-Hostel-demolishing-material-Auction.pdf',
    fileUrl: '/documents/notices/Notice-for-Awantika-Hostel-demolishing-material-Auction.pdf',
    fileName: 'Notice-for-Awantika-Hostel-demolishing-material-Auction.pdf',
    published: true,
    pinned: false,
    expiryDate: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'default-12',
    title: 'Quotation Invited for Repair and painting at Department of Music',
    description: '',
    link: '/documents/notices/Quotation Invited for Repair and painting at Department of Music.pdf',
    fileUrl: '/documents/notices/Quotation Invited for Repair and painting at Department of Music.pdf',
    fileName: 'Quotation Invited for Repair and painting at Department of Music.pdf',
    published: true,
    pinned: false,
    expiryDate: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'default-13',
    title: 'Rules Regulations Regarding Central Library',
    description: '',
    link: '/documents/notices/Rules-Regulations-Regarding-Central-Library.pdf',
    fileUrl: '/documents/notices/Rules-Regulations-Regarding-Central-Library.pdf',
    fileName: 'Rules-Regulations-Regarding-Central-Library.pdf',
    published: true,
    pinned: false,
    expiryDate: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

export const getNotifications = () => {
  try {
    const notifications = localStorage.getItem(NOTIFICATIONS_KEY);
    if (notifications) {
      const parsed = JSON.parse(notifications);
      if (parsed.length === 0) {
        // If empty array, initialize with default notices
        localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(DEFAULT_NOTICES));
        return DEFAULT_NOTICES;
      }
      // Check if this is old data (no default notices)
      const hasDefaults = parsed.some(n => n.id && n.id.startsWith('default-'));
      if (!hasDefaults) {
        // Old data, replace with defaults
        localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(DEFAULT_NOTICES));
        return DEFAULT_NOTICES;
      }
      return parsed;
    } else {
      // Initialize with default notices
      localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(DEFAULT_NOTICES));
      return DEFAULT_NOTICES;
    }
  } catch (error) {
    console.error('Error getting notifications:', error);
    return DEFAULT_NOTICES;
  }
};

export const saveNotifications = (notifications) => {
  try {
    localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(notifications));
    return true;
  } catch (error) {
    console.error('Error saving notifications:', error);
    return false;
  }
};

export const addNotification = (notification) => {
  const notifications = getNotifications();
  const newNotification = {
    id: Date.now().toString(),
    title: notification.title,
    description: notification.description || '',
    link: notification.link || '',
    fileUrl: notification.fileUrl || '',
    fileName: notification.fileName || '',
    published: true,
    pinned: notification.pinned || false,
    expiryDate: notification.expiryDate || null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  notifications.unshift(newNotification); // Add to beginning
  return saveNotifications(notifications) ? newNotification : null;
};

export const updateNotification = (id, updates) => {
  const notifications = getNotifications();
  const index = notifications.findIndex(n => n.id === id);

  if (index !== -1) {
    notifications[index] = {
      ...notifications[index],
      ...updates,
      updatedAt: new Date().toISOString()
    };
    return saveNotifications(notifications) ? notifications[index] : null;
  }
  return null;
};

export const deleteNotification = (id) => {
  const notifications = getNotifications();
  const filtered = notifications.filter(n => n.id !== id);
  return saveNotifications(filtered);
};

export const getActiveNotifications = () => {
  const notifications = getNotifications();
  const now = new Date();

  return notifications
    .filter(notification => {
      if (!notification.published) return false;
      if (notification.expiryDate && new Date(notification.expiryDate) < now) return false;
      return true;
    })
    .sort((a, b) => {
      // Pinned notifications first, then by creation date (newest first)
      if (a.pinned && !b.pinned) return -1;
      if (!a.pinned && b.pinned) return 1;
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
};

export const getSlidingNotices = () => {
  const activeNotifications = getActiveNotifications();
  return activeNotifications.map(notification => ({
    text: notification.title,
    link: notification.link || '#',
    fileUrl: notification.fileUrl
  }));
};
