import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, FileText, Download, ExternalLink, Filter, Building, Wrench, BookOpen, Search, SortAsc, SortDesc, ChevronLeft, ChevronRight, DollarSign, User, Clock, Eye, X, HelpCircle, AlertCircle, Copy } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { tenders as tenderData, tenderFAQs } from '../data/tenders';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { useToast } from '../components/ui/use-toast';

const Tender = () => {
  const { t } = useTranslation();
  const { toast } = useToast();

  const [selectedTender, setSelectedTender] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Use imported tender data (empty array for now)
  const tenders = tenderData;

  const categories = ['All', 'Equipment', 'Services', 'Books'];
  const statuses = ['All', 'Open', 'Closed'];
  const sortOptions = [
    { value: 'lastDate-asc', label: 'Last Date (Earliest First)' },
    { value: 'lastDate-desc', label: 'Last Date (Latest First)' },
    { value: 'status-asc', label: 'Status (Open First)' },
    { value: 'status-desc', label: 'Status (Closed First)' },
    { value: 'category-asc', label: 'Category (A-Z)' },
    { value: 'category-desc', label: 'Category (Z-A)' },
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('lastDate-desc');
  const [currentPage, setCurrentPage] = useState(1);
  const tendersPerPage = 6;

  const filteredTenders = useMemo(() => {
    let filtered = tenders.filter(tender => {
      const categoryMatch = selectedCategory === 'All' || tender.category === selectedCategory;
      const statusMatch = selectedStatus === 'All' || tender.status === selectedStatus;
      const searchMatch = searchQuery === '' ||
        tender.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tender.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tender.tenderNumber.toLowerCase().includes(searchQuery.toLowerCase());
      return categoryMatch && statusMatch && searchMatch;
    });

    // Sort tenders
    filtered.sort((a, b) => {
      const [field, direction] = sortBy.split('-');
      let comparison = 0;

      switch (field) {
        case 'lastDate':
          comparison = new Date(a.lastDate) - new Date(b.lastDate);
          break;
        case 'status':
          comparison = a.status.localeCompare(b.status);
          break;
        case 'category':
          comparison = a.category.localeCompare(b.category);
          break;
        default:
          return 0;
      }

      return direction === 'desc' ? -comparison : comparison;
    });

    return filtered;
  }, [tenders, selectedCategory, selectedStatus, searchQuery, sortBy]);

  // Pagination
  const totalPages = Math.max(1, Math.ceil(filteredTenders.length / tendersPerPage));
  const startIndex = (currentPage - 1) * tendersPerPage;
  const paginatedTenders = filteredTenders.slice(startIndex, startIndex + tendersPerPage);

  const featuredTenders = tenders.filter(tender => tender.featured);

  const getStatusColor = (status) => {
    return status === 'Open' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Equipment':
        return <Wrench className="w-5 h-5" />;
      case 'Services':
        return <Building className="w-5 h-5" />;
      case 'Books':
        return <BookOpen className="w-5 h-5" />;
      default:
        return <FileText className="w-5 h-5" />;
    }
  };

  const handleDownload = (tender) => {
    setIsLoading(true);
    // Simulate download
    setTimeout(() => {
      setIsLoading(false);
      toast({ title: 'Download started', description: `Started downloading ${tender.tenderNumber || tender.title}` });
    }, 800);
  };

  const handleCopyLink = async (tender) => {
    const url = `${window.location.origin}/tenders/${tender.id}`;
    try {
      await navigator.clipboard.writeText(url);
      toast({ title: 'Link copied', description: 'Tender link copied to clipboard' });
    } catch (e) {
      toast({ title: 'Unable to copy', description: 'Please copy the link manually' });
    }
  };

  const openDetails = (tender) => {
    setSelectedTender(tender);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTender(null);
  };

  return (
    <>
      <Helmet>
        <title>{t('tenders.title')}</title>
        <meta name="description" content={t('tenders.metaDescription')} />
      </Helmet>

      <div className="pt-0">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-3">
                <span className="text-primary">{t('tenders.pageTitle')}</span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto">{t('tenders.pageSubtitle')}</p>
            </motion.div>

            {/* Controls: Search / Sort / Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center w-full md:w-1/2 bg-background border border-border rounded-lg px-3 py-2">
                  <Search className="w-4 h-4 text-muted-foreground" />
                  <input
                    aria-label="Search tenders"
                    placeholder={t('tenders.searchPlaceholder') || 'Search tenders...'}
                    value={searchQuery}
                    onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                    className="ml-3 w-full bg-transparent outline-none text-sm"
                  />
                  <button
                    aria-label="Clear search"
                    onClick={() => { setSearchQuery(''); }}
                    className="ml-2 text-muted-foreground"
                    title="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <div className="hidden md:block">
                    <label className="sr-only">Sort</label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    >
                      {sortOptions.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex items-center gap-2">
                    <Filter className="w-4 h-4 text-primary" />
                    <div className="flex gap-2">
                      <select
                        value={selectedCategory}
                        onChange={(e) => { setSelectedCategory(e.target.value); setCurrentPage(1); }}
                        className="px-3 py-2 border border-border rounded-lg bg-background text-sm"
                      >
                        {categories.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>

                      <select
                        value={selectedStatus}
                        onChange={(e) => { setSelectedStatus(e.target.value); setCurrentPage(1); }}
                        className="px-3 py-2 border border-border rounded-lg bg-background text-sm"
                      >
                        {statuses.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Featured Tenders */}
            {featuredTenders.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold mb-6"><span className="text-primary">Featured Tenders</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {featuredTenders.map(ft => (
                    <div key={ft.id} className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            {getCategoryIcon(ft.category)}
                            <span className="text-sm font-medium text-muted-foreground">{ft.category}</span>
                          </div>
                          <h3 className="text-lg font-bold mb-1">{ft.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{ft.description}</p>
                          <div className="text-xs text-muted-foreground flex gap-4">
                            <div className="flex items-center gap-1"><FileText className="w-3 h-3" />{ft.tenderNumber}</div>
                            <div className="flex items-center gap-1"><Calendar className="w-3 h-3" />{ft.lastDate}</div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <button onClick={() => handleDownload(ft)} className="px-3 py-2 bg-primary text-white rounded">{t('tenders.download')}</button>
                          <button onClick={() => openDetails(ft)} className="px-3 py-2 border rounded">View</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Tenders Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {paginatedTenders.length > 0 ? (
                paginatedTenders.map((tender, index) => (
                  <motion.article
                    key={tender.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                    whileHover={{ y: -5 }}
                    className="group bg-white rounded-2xl shadow p-5 hover:shadow-lg transition"
                    aria-labelledby={`tender-title-${tender.id}`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        {getCategoryIcon(tender.category)}
                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">{tender.category}</span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(tender.status)}`}>{tender.status}</span>
                    </div>

                    <h3 id={`tender-title-${tender.id}`} className="font-bold mb-2 text-sm line-clamp-2">{tender.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-3">{tender.description}</p>

                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1"><FileText className="w-3 h-3" />{tender.tenderNumber}</div>
                        <div className="flex items-center gap-1"><Calendar className="w-3 h-3" />{t('tenders.lastDate')}: {tender.lastDate}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button onClick={() => handleDownload(tender)} className="flex items-center gap-2 px-3 py-2 rounded bg-primary text-white text-sm">
                          <Download className="w-4 h-4" />{t('tenders.download')}
                        </button>
                        <button onClick={() => openDetails(tender)} className="px-3 py-2 rounded border text-sm">Details</button>
                        <button onClick={() => handleCopyLink(tender)} className="px-2 py-2 rounded border text-sm" title="Copy link"><Copy className="w-4 h-4" /></button>
                      </div>
                    </div>
                  </motion.article>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">{t('tenders.noTenders')}</h3>
                  <p className="text-muted-foreground">Please check back later for new tenders.</p>
                </div>
              )}
            </motion.div>

            {/* Pagination Controls */}
            <div className="mt-8 flex items-center justify-between">
              <div className="text-sm text-muted-foreground">Showing <strong>{filteredTenders.length === 0 ? 0 : startIndex + 1}</strong> - <strong>{Math.min(startIndex + tendersPerPage, filteredTenders.length)}</strong> of <strong>{filteredTenders.length}</strong></div>
              <div className="flex items-center gap-2">
                <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} className="p-2 rounded border disabled:opacity-50"><ChevronLeft className="w-4 h-4" /></button>
                <div className="hidden md:flex items-center gap-1">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button key={i} onClick={() => setCurrentPage(i + 1)} className={`px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-primary text-white' : 'border'}`}>{i + 1}</button>
                  ))}
                </div>
                <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} className="p-2 rounded border disabled:opacity-50"><ChevronRight className="w-4 h-4" /></button>
              </div>
            </div>

            {/* FAQ and Contact */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 bg-white p-6 rounded-2xl shadow">
                <h3 className="text-lg font-bold mb-4">Frequently Asked Questions</h3>
                <Accordion type="single" collapsible>
                  {tenderFAQs.map((faq, i) => (
                    <AccordionItem key={i} value={`faq-${i}`}>
                      <AccordionTrigger>{faq.question}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-primary text-primary-foreground"
              >
                <h3 className="text-xl font-bold mb-2">{t('tenders.contactProcurement')}</h3>
                <p className="text-white/90 mb-4">For queries, contact our procurement officer.</p>
                <p className="text-sm text-white/90">{t('tenders.procurementOfficer')}<br />{t('tenders.procurementEmail')}<br />{t('tenders.procurementPhone')}</p>
              </motion.div>
            </div>

            {/* Modal: Tender Details */}
            <AnimatePresence>
              {isModalOpen && selectedTender && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 flex items-center justify-center p-4"
                >
                  <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="max-w-3xl w-full bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{selectedTender.title}</h3>
                        <div className="text-xs text-muted-foreground">{selectedTender.tenderNumber} • {selectedTender.category} • {selectedTender.status}</div>
                      </div>
                      <button onClick={closeModal} aria-label="Close" className="p-2 rounded hover:bg-muted">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-3">{selectedTender.description}</p>
                        {selectedTender.estimatedValue && <p className="text-sm"><strong>Estimated Value:</strong> {selectedTender.estimatedValue}</p>}
                        {selectedTender.contactPerson && <p className="text-sm"><strong>Contact:</strong> {selectedTender.contactPerson}</p>}
                        {selectedTender.requirements && <div className="mt-3"><h4 className="font-medium">Requirements</h4><p className="text-sm text-muted-foreground">{selectedTender.requirements}</p></div>}
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Documents</h4>
                        {selectedTender.documents && selectedTender.documents.length > 0 ? (
                          <ul className="space-y-2 text-sm">
                            {selectedTender.documents.map((doc, idx) => (
                              <li key={idx} className="flex items-center justify-between">
                                <a className="text-primary" href={doc} target="_blank" rel="noreferrer">{doc.split('/').pop()}</a>
                                <div className="flex gap-2">
                                  <button onClick={() => handleDownload(selectedTender)} className="px-2 py-1 rounded bg-primary text-white text-xs">Download</button>
                                  <button onClick={() => handleCopyLink(selectedTender)} title="Copy link" className="px-2 py-1 rounded border text-xs"><Copy className="w-3 h-3" /></button>
                                </div>
                              </li>
                            ))}
                          </ul>
                        ) : <p className="text-sm text-muted-foreground">No documents available.</p>}
                      </div>
                    </div>

                    <div className="mt-6 flex justify-end gap-3">
                      <button onClick={closeModal} className="px-4 py-2 rounded border">Close</button>
                      {selectedTender.status === 'Open' && <a href={selectedTender.applyLink || '#'} className="px-4 py-2 rounded bg-primary text-white">Apply Now</a>}
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </div>
    </>
  );
};

export default Tender;
