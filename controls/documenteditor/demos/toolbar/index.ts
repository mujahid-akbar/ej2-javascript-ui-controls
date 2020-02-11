import { DocumentEditorContainer } from '../../src/index';
import { Toolbar } from '../../src/document-editor-container/tool-bar/tool-bar';
import { L10n } from '@syncfusion/ej2-base';

//Document Editor Arabic Sample Locale
L10n.load({
    'ar-AE': {
        'documenteditor': {
            'Table': 'لجدول',
            'Row': 'لصف',
            'Cell': 'الخليه',
            'Ok': 'موافق',
            'Cancel': 'إلغاء الأمر',
            'Size': 'حجم',
            'Preferred Width': 'العرض المفضل',
            'Points': 'نقاط',
            'Percent': 'المائه',
            'Measure in': 'القياس في',
            'Alignment': 'محاذاه',
            'Left': 'ليسار',
            'Center': 'مركز',
            'Right': 'الحق',
            'Justify': 'تبرير',
            'Indent from left': 'مسافة بادئه من اليسار',
            'Borders and Shading': 'الحدود والتظليل',
            'Options': 'خيارات',
            'Specify height': 'تحديد الارتفاع',
            'At least': 'الاقل',
            'Exactly': 'تماما',
            'Row height is': 'ارتفاع الصف هو',
            'Allow row to break across pages': 'السماح بفصل الصف عبر الصفحات',
            'Repeat as header row at the top of each page': 'تكرار كصف راس في اعلي كل صفحه',
            'Vertical alignment': 'محاذاة عمودي',
            'Top': 'أعلى',
            'Bottom': 'اسفل',
            'Default cell margins': 'هوامش الخلية الافتراضية',
            'Default cell spacing': 'تباعد الخلايا الافتراضي',
            'Allow spacing between cells': 'السماح بالتباعد بين الخلايا',
            'Cell margins': 'هوامش الخلية',
            'Same as the whole table': 'نفس الجدول بأكمله',
            'Borders': 'الحدود',
            'None': 'اي',
            'Single': 'واحد',
            'Dot': 'نقطه',
            'DashSmallGap': 'داشسمجاب',
            'DashLargeGap': 'الاتحاد الخاص',
            'DashDot': 'داشدوت',
            'DashDotDot': 'ددهدودوت',
            'Double': 'انقر نقرا مزدوجا',
            'Triple': 'الثلاثي',
            'ThinThickSmallGap': 'فجوه صغيره سميكه رقيق',
            'ThickThinSmallGap': 'الفجوة الصغيرة رقيقه سميكه',
            'ThinThickThinSmallGap': 'صغيره سميكه رقيقه الفجوة الصغيرة',
            'ThinThickMediumGap': 'فجوه متوسطه سميك',
            'ThickThinMediumGap': 'سميكه الفجوة متوسطه رقيقه',
            'ThinThickThinMediumGap': 'رقيقه سميكه متوسطه الفجوة',
            'ThinThickLargeGap': 'الفجوة الكبيرة رقيقه سميكه',
            'ThickThinLargeGap': 'فجوه كبيره رقيقه سميك',
            'ThinThickThinLargeGap': 'رقيقه سميكه الفجوة الكبيرة',
            'SingleWavy': 'واحد مائج',
            'DoubleWavy': 'مزدوج مائج',
            'DashDotStroked': 'اندفاعه نقطه القوية',
            'Emboss3D': 'D3مزخرف',
            'Engrave3D': 'D3نقش',
            'Outset': 'البدايه',
            'Inset': 'الداخلي',
            'Thick': 'سميكه',
            'Style': 'نمط',
            'Width': 'عرض',
            'Height': 'ارتفاع',
            'Letter': 'رساله',
            'Tabloid': 'التابلويد',
            'Legal': 'القانونيه',
            'Statement': 'بيان',
            'Executive': 'التنفيذي',
            'A3': 'A3',
            'A4': 'A4',
            'A5': 'A5',
            'B4': 'B4',
            'B5': 'B5',
            'Custom Size': 'حجم مخصص',
            'Different odd and even': 'مختلفه غريبه وحتى',
            'Different first page': 'الصفحة الاولي مختلفه',
            'From edge': 'من الحافة',
            'Header': 'راس',
            'Footer': 'تذييل الصفحه',
            'Margin': 'الهوامش',
            'Paper': 'الورق',
            'Layout': 'تخطيط',
            'Orientation': 'التوجه',
            'Landscape': 'المناظر الطبيعيه',
            'Portrait': 'صوره',
            'Table Of Contents': 'جدول المحتويات',
            'Show page numbers': 'إظهار أرقام الصفحات',
            'Right align page numbers': 'محاذاة أرقام الصفحات إلى اليمين',
            'Nothing': 'شيء',
            'Tab leader': 'قائد علامة التبويب',
            'Show levels': 'إظهار المستويات',
            'Use hyperlinks instead of page numbers': 'استخدام الارتباطات التشعبية بدلا من أرقام الصفحات',
            'Build table of contents from': 'بناء جدول محتويات من',
            'Styles': 'انماط',
            'Available styles': 'الأنماط المتوفرة',
            'TOC level': 'مستوي جدول المحتويات',
            'Heading': 'عنوان',
            'Heading 1': 'عنوان 1',
            'Heading 2': 'عنوان 2',
            'Heading 3': 'عنوان 3',
            'Heading 4': 'عنوان 4',
            'Heading 5': 'عنوان 5',
            'Heading 6': 'عنوان 6',
            'List Paragraph': 'فقره القائمة',
            'Normal': 'العاديه',
            'Outline levels': 'مستويات المخطط التفصيلي',
            'Table entry fields': 'حقول إدخال الجدول',
            'Modify': 'تعديل',
            'Color': 'لون',
            'Setting': 'اعداد',
            'Box': 'مربع',
            'All': 'جميع',
            'Custom': 'المخصصه',
            'Preview': 'معاينه',
            'Shading': 'التظليل',
            'Fill': 'ملء',
            'Apply To': 'تنطبق علي',
            'Table Properties': 'خصائص الجدول',
            'Cell Options': 'خيارات الخلية',
            'Table Options': 'خيارات الجدول',
            'Insert Table': 'ادراج جدول',
            'Number of columns': 'عدد الاعمده',
            'Number of rows': 'عدد الصفوف',
            'Text to display': 'النص الذي سيتم عرضه',
            'Address': 'عنوان',
            'Insert Hyperlink': 'ادراج ارتباط تشعبي',
            'Edit Hyperlink': 'تحرير ارتباط تشعبي',
            'Insert': 'ادراج',
            'General': 'العامه',
            'Indentation': 'المسافه البادئه',
            'Before text': 'قبل النص',
            'Special': 'الخاصه',
            'First line': 'السطر الأول',
            'Hanging': 'معلقه',
            'After text': 'بعد النص',
            'By': 'من',
            'Before': 'قبل',
            'Line Spacing': 'تباعد الأسطر',
            'After': 'بعد',
            'At': 'في',
            'Multiple': 'متعدده',
            'Spacing': 'تباعد',
            'Define new Multilevel list': 'تحديد قائمه متعددة الاصعده جديده',
            'List level': 'مستوي القائمة',
            'Choose level to modify': 'اختر المستوي الذي تريد تعديله',
            'Level': 'مستوي',
            'Number format': 'تنسيق الأرقام',
            'Number style for this level': 'نمط الرقم لهذا المستوي',
            'Enter formatting for number': 'إدخال تنسيق لرقم',
            'Start at': 'بداية من',
            'Restart list after': 'أعاده تشغيل قائمه بعد',
            'Position': 'موقف',
            'Text indent at': 'المسافة البادئة للنص في',
            'Aligned at': 'محاذاة في',
            'Follow number with': 'اتبع الرقم مع',
            'Tab character': 'حرف علامة التبويب',
            'Space': 'الفضاء',
            'Arabic': 'العربية',
            'UpRoman': 'حتى الروماني',
            'LowRoman': 'الرومانية منخفضه',
            'UpLetter': '',
            'LowLetter': '',
            'Number': 'عدد',
            'Leading zero': 'يؤدي صفر',
            'Bullet': 'رصاصه',
            'Ordinal': 'الترتيبيه',
            'Ordinal Text': 'النص الترتيبي',
            'For East': 'للشرق',
            'No Restart': 'لا أعاده تشغيل',
            'Font': 'الخط',
            'Font style': 'نمط الخط',
            'Underline style': 'نمط التسطير',
            'Font color': 'لون الخط',
            'Effects': 'الاثار',
            'Strikethrough': 'يتوسطه',
            'Superscript': 'مرتفع',
            'Subscript': 'منخفض',
            'Double strikethrough': 'خط مزدوج يتوسطه خط',
            'Regular': 'العاديه',
            'Bold': 'جريئه',
            'Italic': 'مائل',
            'Cut': 'قطع',
            'Copy': 'نسخ',
            'Paste': 'لصق',
            'Hyperlink': 'الارتباط التشعبي',
            'Open Hyperlink': 'فتح ارتباط تشعبي',
            'Copy Hyperlink': 'نسخ ارتباط تشعبي',
            'Remove Hyperlink': 'أزاله ارتباط تشعبي',
            'Paragraph': 'الفقره',
            'Linked Style': 'مرتبط (فقره وحرف)',
            'Character': 'حرف',
            'Merge Cells': 'دمج الخلايا',
            'Insert Above': 'ادراج أعلاه',
            'Insert Below': 'ادراج أدناه',
            'Insert Left': 'ادراج إلى اليسار',
            'Insert Right': 'ادراج اليمين',
            'Delete': 'حذف',
            'Delete Table': 'حذف جدول',
            'Delete Row': 'حذف صف',
            'Delete Column': 'حذف عمود',
            'File Name': 'اسم الملف',
            'Format Type': 'نوع التنسيق',
            'Save': 'حفظ',
            'Navigation': 'التنقل',
            'Results': 'نتائج',
            'Replace': 'استبدال',
            'Replace All': 'استبدال الكل',
            'We replaced all': 'استبدلنا جميع',
            'Find': 'العثور',
            'No matches': 'لا توجد تطابقات',
            'All Done': 'كل القيام به',
            'Result': 'نتيجه',
            'of': 'من',
            'instances': 'الحالات',
            'with': 'مع',
            'Click to follow link': 'انقر لمتابعه الارتباط',
            'Continue Numbering': 'متابعه الترقيم',
            'Bookmark name': 'اسم الإشارة المرجعية',
            'Close': 'اغلاق',
            'Restart At': 'أعاده التشغيل عند',
            'Properties': 'خصائص',
            'Name': 'اسم',
            'Style type': 'نوع النمط',
            'Style based on': 'نمط استنادا إلى',
            'Style for following paragraph': 'نمط للفقرة التالية',
            'Formatting': 'التنسيق',
            'Numbering and Bullets': 'الترقيم والتعداد النقطي',
            'Numbering': 'ترقيم',
            'Update Field': 'تحديث الحقل',
            'Edit Field': 'تحرير الحقل',
            'Bookmark': 'الإشارة المرجعية',
            'Page Setup': 'اعداد الصفحة',
            'No bookmarks found': 'لم يتم العثور علي إشارات مرجعيه',
            'Number format tooltip information': 'تنسيق رقم أحادي المستوي:' + '</br>' + '[بادئه]% [مستوي الاعداد] [لاحقه]' + '</br>'
                // tslint:disable-next-line:max-line-length    
                + 'علي سبيل االمثال ، "الفصل% 1." سيتم عرض الترقيم مثل' + '</br>' + 'الفصل الأول- البند' + '</br>' + 'الفصل الثاني- البند' + '</br>...'
                + '</br>' + 'الفصل نون-البند' + '</br>'
                // tslint:disable-next-line:max-line-length
                + '</br>' + 'تنسيق رقم متعدد الإعدادات:' + '</br>' + '[بادئه]% [مستوي المستوي]' + '</br>' + '[لاحقه] + [بادئه]%' + '</br>' + '[المستوي] [لاحقه]'
                + '</br>' + 'علي سبيل المثال ، "% 1.% 2." سيتم عرض الترقيم مثل' + '</br>' + '1.1 البند' + '</br>' + '1.2 البند' + '</br>...' + '</br>' + '1. نون-البند',
            'Format': 'تنسيق',
            'Create New Style': 'إنشاء نمط جديد',
            'Modify Style': 'تعديل النمط',
            'New': 'الجديد',
            'Bullets': 'الرصاص',
            'Use bookmarks': 'استخدام الإشارات المرجعية',
            'Table of Contents': 'جدول المحتويات',
            'AutoFit': 'الاحتواء',
            'AutoFit to Contents': 'احتواء تلقائي للمحتويات',
            'AutoFit to Window': 'احتواء تلقائي للإطار',
            'Fixed Column Width': 'عرض العمود الثابت',
            'Reset': 'اعاده تعيين',
            'Match case': 'حاله المباراة',
            'Whole words': 'كلمات كامل',
            'Add': 'اضافه',
            'Go To': 'الانتقال إلى',
            'Search for': 'البحث عن',
            'Replace with': 'استبدال',
            'TOC 1': 'جدول المحتويات 1',
            'TOC 2': 'جدول المحتويات 2',
            'TOC 3': 'جدول المحتويات 3',
            'TOC 4': 'جدول المحتويات 4',
            'TOC 5': 'جدول المحتويات 5',
            'TOC 6': 'جدول المحتويات 6',
            'TOC 7': 'جدول المحتويات 7',
            'TOC 8': 'جدول المحتويات 8',
            'TOC 9': 'جدول المحتويات 9',
            'Right-to-left': 'من اليمين إلى اليسار',
            'Left-to-right': 'من اليسار إلى اليمين',
            'Direction': 'الاتجاه',
            'Table direction': 'اتجاه الجدول',
            'Indent from right': 'مسافة بادئه من اليمين',
            'Format restrictions': 'قيود التنسيق',
            'Allow Formatting': 'السماح بالتنسيق',
            'Editing restrictions': 'قيود التحرير',
            'Read only': 'للقراءة فقط',
            'User permissions': 'أذونات المستخدم',
            'Everyone': 'الجميع',
            'Add Users': 'أضافه مستخدمين',
            'Enforcing Protection': 'فرض الحماية',
            'Enter User': 'ادخل المستخدم',
            'Users': 'المستخدمين',
            'Enter new password': 'ادخل كلمه مرور جديد',
            'Reenter new password': 'أعاده إدخال كلمه مرور جديده',
            'Your permissions': 'الأذونات الخاصة بك',
            'This document is protected from unintenional editing.You may edit in this region,but all changes will be tracked.': 'هذا المستند محمي من التحرير غير الموجه. يمكنك التحرير في هذه المنطقة ، ولكن سيتم تعقب كافة التغييرات',
            'You may format text only with certain styles': 'يمكنك تنسيق النص فقط مع أنماط معينه',
            'Stop Protection': 'إيقاف الحماية',
            'Unprotect Document': 'إلغاء حماية المستند',
            'Password': 'كلمه المرور',
            /* tslint:disable */
            "Contextual Spacing": 'عدم إضافة مسافة بين فقرات نفس الأنماط',
            'Keep source formatting': 'الاحتفاظ بتنسيق المصدر',
            'Match destination formatting': 'مطابقه تنسيق الوجهة',
            'Text only': 'النص فقط',
            'No Headings': 'لم يتم العثور على عنوان!',
            'Add Headings': 'لا تحتوي هذه الوثيقة على عناوين. الرجاء إضافة العناوين والمحاولة مرة أخرى.'

            /* tslint:enable */
        },
        'documenteditorcontainer': {
            'New': 'الجديد',
            'Open': 'فتح',
            'Undo': 'التراجع عن',
            'Redo': 'اعاده',
            'Image': 'الصوره',
            'Table': 'الجدول',
            'Link': 'الارتباط',
            'Bookmark': 'الاشاره المرجعيه',
            'Table of Contents': 'جدول المحتويات',
            'HEADING - - - - 1': 'عنوان - - - - 1',
            'HEADING - - - - 2': 'عنوان - - - - 2',
            'HEADING - - - - 3': 'عنوان - - - - 3',
            'Header': 'راس',
            'Footer': 'تذييل الصفحه',
            'Page Setup': 'اعداد الصفحة',
            'Page Number': 'رقم الصفحة',
            'Break': 'كسر',
            'Find': 'العثور',
            'Local Clipboard': 'الحافظة المحلية',
            'Restrict Editing': 'تقييد التحرير',
            'Upload from computer': 'تحميل من الكمبيوتر',
            'By URL': 'حسب عنوان رابط',
            'Page Break': 'فاصل صفحات',
            'Section Break': 'فاصل المقطع',
            'Header And Footer': 'راس وتذييل الصفحة',
            'Options': 'خيارات',
            'Levels': 'مستويات',
            'Different First Page': 'الصفحة الاولي مختلفه',
            'Different header and footer for odd and even pages': 'راس وتذييل مختلفين للصفحات الفردية والزوجية',
            'Different Odd And Even Pages': 'مختلف الصفحات الفردية والزوجية',
            'Different header and footer for first page': 'راس وتذييل مختلفين للصفحة الاولي',
            'Position': 'موقف',
            'Header from Top': 'راس من اعلي',
            'Footer from Bottom': 'تذييل الصفحة من الأسفل',
            'Distance from top of the page to top of the header': 'المسافة من اعلي الصفحة إلى اعلي الراس',
            'Distance from bottom of the page to bottom of the footer': 'المسافة من أسفل الصفحة إلى أسفل التذييل',
            'Aspect ratio': 'نسبه العرض إلى الارتفاع',
            'W': 'في',
            'H': 'ح',
            'Width': 'عرض',
            'Height': 'ارتفاع',
            'Text': 'النص',
            'Paragraph': 'الفقره',
            'Fill': 'ملء',
            'Fill color': 'لون التعبئة',
            'Border Style': 'نمط الحدود',
            'Outside borders': 'خارج الحدود',
            'All borders': 'جميع الحدود',
            'Inside borders': 'داخل الحدود',
            'Left border': 'الحدود اليسرى',
            'Inside vertical border': 'داخل الحدود العمودية',
            'Right border': 'الحدود اليمني',
            'Top border': 'اعلي الحدود',
            'Inside horizontal border': 'داخل الحدود الافقي',
            'Bottom border': 'الحد السفلي',
            'Border color': 'لون الحدود',
            'Border width': 'عرض الحدود',
            'Cell': 'الخليه',
            'Merge cells': 'دمج الخلايا',
            'Insert Or Delete': 'ادراج/حذف',
            'Insert columns to the left': 'ادراج أعمده إلى اليسار',
            'Insert columns to the right': 'ادراج أعمده إلى اليمين',
            'Insert rows above': 'ادراج صفوف أعلا',
            'Insert rows below': 'ادراج صفوف أدنا',
            'Delete rows': 'حذف صفوف',
            'Delete columns': 'حذف أعمده',
            'Cell Margin': 'هامش الخلية',
            'Top': 'أعلى',
            'Bottom': 'اسفل',
            'Left': 'اليسار',
            'Right': 'الحق',
            'Align Text': 'محاذاة النص',
            'Align top': 'محاذاة إلى الأعلى',
            'Align bottom': 'محاذاة إلى الأسفل',
            'Align center': 'محاذاة إلى الوسط',
            // tslint:disable-next-line:max-line-length
            'Number of heading or outline levels to be shown in table of contents': 'عدد مستويات العناوين أو المخططات التفصيلية التي ستظهر في جدول المحتويات',
            'Show page numbers': 'إظهار أرقام الصفحات',
            'Show page numbers in table of contents': 'إظهار أرقام الصفحات في جدول المحتويات',
            'Right align page numbers': 'محاذاة أرقام الصفحات إلى اليمين',
            'Right align page numbers in table of contents': 'محاذاة أرقام الصفحات الصحيحة في جدول المحتويات',
            'Use hyperlinks': 'استخدام الارتباطات التشعبية',
            'Use hyperlinks instead of page numbers': 'استخدام الارتباطات التشعبية بدلا من أرقام الصفحات.',
            'Font': 'الخط',
            'Font Size': 'حجم الخط',
            'Font color': 'لون الخط',
            'Text highlight color': 'لون تمييز النص',
            'Clear all formatting': 'مسح كافة التنسيقات',
            'Bold Tooltip': 'غامق (Ctrl + B)',
            'IItalic Tooltip': 'مائل (Ctrl + I)',
            'Underline Tooltip': 'تسطير (Ctrl + U)',
            'Strikethrough': 'يتوسطه',
            'Superscript Tooltip': 'مرتفع (Ctrl + Shift + +)',
            'Subscript Tooltip': 'منخفض (Ctrl + =)',
            'Align left Tooltip': 'محاذاة إلى اليسار (Ctrl + L)',
            'Center Tooltip': 'المركز (Ctrl + E)',
            'Align right Tooltip': 'محاذاة إلى اليمين (Ctrl + R)',
            'Justify Tooltip': 'ضبط (Ctrl + J)',
            'Decrease indent': 'إنقاص المسافة البادئة',
            'Increase indent': 'زيادة المسافة البادئة',
            'Line spacing': 'تباعد الأسطر',
            'Bullets': 'الرصاص',
            'Numbering': 'ترقيم',
            'Styles': 'انماط',
            'Manage Styles': 'أداره الأنماط',
            'Update': 'تحديث',
            'Cancel': 'إلغاء الأمر',
            'Insert': 'ادراج',
            'No Border': ' لا حدود ',
            'Create a new document': 'إنشاء مستند جديد',
            'Open a document': 'فتح مستند',
            'Undo Tooltip': 'التراجع عن العملية الاخيره (Ctrl + Z)',
            'Redo Tooltip': 'أعاده العملية الاخيره (Ctrl + Y)',
            'Insert inline picture from a file': 'ادراج صوره مضمنه من ملف',
            'Insert a table into the document': 'ادراج جدول في المستند',
            // tslint:disable-next-line:max-line-length
            'Create a link in your document for quick access to webpages and files (Ctrl+K).': 'إنشاء ارتباط في المستند للوصول السريع إلى صفحات ويب والملفات (Ctrl + K)',
            'Insert a bookmark in a specific place in this document': 'ادراج اشاره مرجعيه في مكان معين في هذا المستند',
            // tslint:disable-next-line:max-line-length
            'Provide an overview of your document by adding a table of contents': 'توفير نظره عامه حول المستند باضافه جدول محتويات',
            'Add or edit the header': 'أضافه الراس أو تحريره',
            'Add or edit the footer': 'أضافه تذييل الصفحة أو تحريره',
            'Open the page setup dialog': 'فتح مربع حوار اعداد الصفحة',
            'Add page numbers': 'أضافه أرقام الصفحات',
            'Find Text': 'البحث عن نص في المستند (Ctrl + F)',
            // tslint:disable-next-line:max-line-length
            'Toggle between the internal clipboard and system clipboard': 'التبديل بين الحافظة الداخلية وحافظه النظام' + '</br>' +
                'تم رفض الوصول إلى حافظه النظام من خلال البرنامج النصي بسبب نهج أمان المستعرضات. بدلا ' + '</br>' +
                '1. يمكنك تمكين الحافظة الداخلية لقطع ونسخ ولصق داخل المكون' + '</br>' +
                '2. يمكنك استخدام اختصارات لوحه المفاتيح (ctrl + X ، ctrl + C و ctrl + V) لقص ونسخ ولصق مع الحافظة النظام',
            'Format restrictions': 'قيود التنسيق',
            'Allow Formatting': 'السماح بالتنسيق',
            'Editing restrictions': 'قيود التحرير',
            'Read only': 'للقراءة فقط',
            'User permissions': 'أذونات المستخدم',
            'Everyone': 'الجميع',
            'Add Users': 'أضافه مستخدمين',
            'Enforcing Protection': 'فرض الحماية',
            'Enter User': 'ادخل المستخدم',
            'Users': 'المستخدمين',
            'Enter new password': 'ادخل كلمه مرور جديد',
            'Reenter new password': 'أعاده إدخال كلمه مرور جديده',
            'Your permissions': 'الأذونات الخاصة بك',
            'This document is protected from unintenional editing.You may edit in this region,but all changes will be tracked.': 'هذا المستند محمي من التحرير غير الموجه. يمكنك التحرير في هذه المنطقة ، ولكن سيتم تعقب كافة التغييرات',
            'You may format text only with certain styles': 'يمكنك تنسيق النص فقط مع أنماط معينه',
            'Stop Protection': 'إيقاف الحماية',
            'Unprotect Document': 'إلغاء حماية المستند',
            'Password': 'كلمه المرور',
            'Protections': 'الحمايه',
            'Single': 'واحد',
            'Double': 'انقر نقرا مزدوجا'
        },
        'colorpicker': {
            'Apply': 'تطبيق',
            'Cancel': 'إلغاء الأمر',
            'ModeSwitcher': 'مفتاح كهربائي الوضع'
        }
    }
});
/**
 * Container component
 */
let container: DocumentEditorContainer = new DocumentEditorContainer();
container.serviceUrl = 'https://ej2services.syncfusion.com/development/web-services/api/documenteditor/';
DocumentEditorContainer.Inject(Toolbar);
container.appendTo('#container');