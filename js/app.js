(function() {
'use strict';

// ============================================================================
// ZIFARAA Timepieces — Consolidated Application
// All modules combined into a single non-module script for file:// compatibility
// ============================================================================


// ── DATA: TRANSLATIONS ──

// Arabic (ar) and Persian (fa) are RTL placeholder translations.
// Replace with professionally verified translations before launch.

var translations = {

  en: {
    // ── Navigation ──
    'nav.collections':  'Collections',
    'nav.showcase':     'Showcase',
    'nav.craft':        'Craftsmanship',
    'nav.about':        'About',
    'nav.contact':      'Contact',
    'nav.wishlist':     'Wishlist',
    'nav.cart':         'Cart',
    'nav.login':        'Sign In',
    'nav.logout':       'Sign Out',
    'nav.account':      'My Account',

    // ── Hero ──
    'hero.eyebrow':     'Precision. Legacy. Time.',
    'hero.line1':       'ZIFA',
    'hero.line2':       'RAA',
    'hero.sub':         'Curated timepieces from the world\'s finest ateliers',
    'hero.cta':         'Explore the Collection',
    'hero.scroll':      'Scroll to discover',

    // ── Collections ──
    'collections.label':   '001 / Collections',
    'collections.heading': 'Four Worlds of Watchmaking',
    'collections.body':    'From heritage dress watches to modern luxury smartwatches — every collection is curated around a single philosophy of excellence.',
    'collections.explore': 'Explore Collection',

    // ── Marquee ──
    'marquee.text': 'ROLEX — PATEK PHILIPPE — CARTIER — OMEGA — HERMÈS — VACHERON CONSTANTIN — ZIFARAA — ',

    // ── Product Showcase ──
    'products.label':      '002 / Showcase',
    'products.heading':    'The Curated Edit',
    'products.body':       'Twelve timepieces. Four philosophies. One standard of excellence.',
    'products.filter.all': 'All',
    'products.add_cart':   'Add to Cart',
    'products.add_wish':   'Save',
    'products.view':       'View Details',
    'products.in_stock':   'In Stock',
    'products.notify':     'Notify Me',
    'products.from':       'From',
    'products.added':      'Added to cart',

    // ── Craftsmanship ──
    'craft.label':         '003 / Craftsmanship',
    'craft.heading':       'Where Obsession Meets Craft',
    'craft.body':          'Every timepiece in the ZIFARAA catalog has been evaluated against 47 individual criteria — movement finishing, crystal clarity, strap quality, lume uniformity, and the precise weight of the crown between thumb and forefinger.',
    'craft.note':          'We curate so you don\'t compromise.',
    'craft.stat1.value':   '47',
    'craft.stat1.label':   'Quality criteria',
    'craft.stat2.value':   '2000',
    'craft.stat2.label':   'Timepieces evaluated',
    'craft.stat3.value':   '12',
    'craft.stat3.label':   'In the final edit',
    'craft.stat4.value':   '4',
    'craft.stat4.label':   'Collections',

    // ── Craftsmanship marquee ──
    'craft.marquee': 'SWISS MOVEMENT — SAPPHIRE CRYSTAL — 316L STEEL — PRECISION — HERITAGE — ',

    // ── About ──
    'about.label':    '004 / About',
    'about.heading':  'Born from a love of horology',
    'about.body1':    'ZIFARAA was born from a simple frustration: the world\'s finest watches — Rolex, Patek Philippe, Cartier, Omega, Hermès, Vacheron Constantin — were scattered across boutiques in Geneva, Tokyo, and New York. No single destination offered them all.',
    'about.body2':    'We built ZIFARAA as the premier marketplace for discerning collectors. Every piece listed has been verified for authenticity, condition, and provenance. We connect you directly with authorised retailers and trusted dealers worldwide.',
    'about.body3':    'ZIFARAA — where the world\'s finest timepieces find their next collector.',
    'about.cta':      'Our Story',

    // ── Testimonials ──
    'testimonials.label':   '005 / Reviews',
    'testimonials.heading': 'What Collectors Say',

    // ── Contact ──
    'contact.label':       '006 / Consultation',
    'contact.heading':     'Book a Private Consultation',
    'contact.body':        'Not sure which timepiece is right for you? Our horological advisors are available for one-on-one consultations — by appointment, at no charge.',
    'contact.name':        'Your Name',
    'contact.email':       'Email Address',
    'contact.phone':       'Phone (optional)',
    'contact.message':     'Tell us what you\'re looking for',
    'contact.submit':      'Send Request',
    'contact.success':     'Your request has been received. We\'ll be in touch within 24 hours.',

    // ── Footer ──
    'footer.tagline':       'Curated luxury timepieces.',
    'footer.nav.label':     'Navigation',
    'footer.collections':   'Collections',
    'footer.about':         'About ZIFARAA',
    'footer.contact':       'Contact',
    'footer.shipping':      'Shipping & Returns',
    'footer.care':          'Watch Care',
    'footer.privacy':       'Privacy Policy',
    'footer.terms':         'Terms of Service',
    'footer.address':       '14 Horological Square\nGeneva, Switzerland CH-1205',
    'footer.email':         'hello@zifaraa.com',
    'footer.phone':         '+41 22 000 0000',
    'footer.social.ig':     'Instagram',
    'footer.social.fb':     'Facebook',
    'footer.social.x':      'X (Twitter)',
    'footer.social.yt':     'YouTube',
    'footer.copyright':     '© 2025 ZIFARAA Timepieces. All rights reserved.',

    // ── Cart ──
    'cart.heading':      'Your Selection',
    'cart.empty':        'Your cart is empty',
    'cart.empty.sub':    'Discover timepieces worthy of your collection.',
    'cart.empty.cta':    'Browse Timepieces',
    'cart.subtotal':     'Subtotal',
    'cart.shipping':     'Shipping',
    'cart.shipping.val': 'Calculated at checkout',
    'cart.total':        'Estimated Total',
    'cart.proceed':      'Proceed to Checkout',
    'cart.remove':       'Remove',
    'cart.qty':          'Qty',

    // ── Wishlist ──
    'wishlist.heading':  'Saved Timepieces',
    'wishlist.empty':    'No saved timepieces yet',
    'wishlist.empty.sub':'Add pieces you love to your wishlist.',
    'wishlist.empty.cta':'Explore Collections',
    'wishlist.move':     'Move to Cart',
    'wishlist.remove':   'Remove',

    // ── Auth ──
    'auth.heading.login':    'Welcome back',
    'auth.heading.register': 'Create an account',
    'auth.tab.login':        'Sign In',
    'auth.tab.register':     'Register',
    'auth.email':            'Email Address',
    'auth.password':         'Password',
    'auth.password.confirm': 'Confirm Password',
    'auth.name':             'Full Name',
    'auth.forgot':           'Forgot password?',
    'auth.submit.login':     'Sign In',
    'auth.submit.register':  'Create Account',
    'auth.switch.register':  'Don\'t have an account? Register',
    'auth.switch.login':     'Already have an account? Sign in',
    'auth.logout.success':   'You have signed out.',

    // ── Checkout ──
    'checkout.title':         'Checkout',
    'checkout.step.review':   'Review',
    'checkout.step.shipping': 'Shipping',
    'checkout.step.payment':  'Payment',
    'checkout.step.confirmed':'Confirmed',
    'checkout.back':          'Back',
    'checkout.next':          'Continue',
    'checkout.place':         'Place Order',
    'checkout.processing':    'Processing…',
    'checkout.shipping.name': 'Full Name',
    'checkout.shipping.email':'Email Address',
    'checkout.shipping.phone':'Phone Number',
    'checkout.shipping.addr1':'Address Line 1',
    'checkout.shipping.addr2':'Address Line 2 (optional)',
    'checkout.shipping.city': 'City',
    'checkout.shipping.zip':  'ZIP / Postal Code',
    'checkout.shipping.country': 'Country',
    'checkout.payment.card':  'Card Details',
    'checkout.summary':       'Order Summary',
    'checkout.confirmed.heading': 'Order Confirmed',
    'checkout.confirmed.body': 'Your order has been received. You\'ll receive a confirmation email shortly.',
    'checkout.confirmed.order': 'Order',
    'checkout.confirmed.cta': 'Continue Shopping',

    // ── Product Modal ──
    'modal.movement':      'Movement',
    'modal.diameter':      'Case Diameter',
    'modal.thickness':     'Thickness',
    'modal.crystal':       'Crystal',
    'modal.water':         'Water Resistance',
    'modal.power':         'Power Reserve',
    'modal.case':          'Case Material',
    'modal.strap':         'Strap',
    'modal.add_cart':      'Add to Cart',
    'modal.add_wish':      'Add to Wishlist',
    'modal.remove_wish':   'Remove from Wishlist',
    'modal.in_stock':      'In Stock',
    'modal.notify':        'Notify Me When Available',
    'modal.close':         'Close',

    // ── Errors / Validation ──
    'error.required':      'This field is required',
    'error.email':         'Enter a valid email address',
    'error.password.short':'Password must be at least 8 characters',
    'error.password.match':'Passwords do not match',

    // ── Misc ──
    'misc.loading':        'Loading…',
    'misc.currency':       'USD',

    // ── Marketplace Nav ──
    'nav.shop':            'Shop',
    'nav.mens':            "Men's Watches",
    'nav.womens':          "Women's Watches",
    'nav.boys':            "Boys' Watches",
    'nav.girls':           "Girls' Watches",
    'nav.brands':          'Brands',
    'nav.new':             'New Arrivals',
    'nav.limited':         'Limited Editions',
    'nav.apple':           'Apple Watch',
    'nav.services':        'Services',

    // ── Category Pages ──
    'page.mens.title':        "Men's Luxury Watches",
    'page.mens.desc':         'Explore our curated selection of luxury timepieces for men — from heritage dress watches to professional sports instruments.',
    'page.womens.title':      "Women's Luxury Watches",
    'page.womens.desc':       'Discover elegant timepieces crafted for women — from Cartier\'s iconic silhouettes to Hermès equestrian refinement.',
    'page.boys.title':        "Boys' Watches",
    'page.boys.desc':         'Introduce the next generation to fine watchmaking with timepieces that inspire and endure.',
    'page.girls.title':       "Girls' Watches",
    'page.girls.desc':        'From smart luxury to timeless design — watches that celebrate young style and ambition.',
    'page.brands.title':      'Our Brands',
    'page.brands.desc':       'ZIFARAA partners exclusively with the world\'s most prestigious watch maisons.',
    'page.new.title':         'New Arrivals',
    'page.new.desc':          'The latest additions to the ZIFARAA collection — fresh from the world\'s finest ateliers.',
    'page.limited.title':     'Limited Editions',
    'page.limited.desc':      'Rare and exceptional timepieces available in limited quantities. Once they\'re gone, they\'re gone.',
    'page.apple.title':       'Apple Watch',
    'page.apple.desc':        'The intersection of technology and luxury. Apple Watch reimagined through the lens of haute horlogerie.',
    'page.services.title':    'Luxury Services',
    'page.services.desc':     'Beyond the purchase — ZIFARAA offers a complete suite of services for the discerning collector.',
    'page.about.title':       'About ZIFARAA',
    'page.about.desc':        'Born from a love of horology, ZIFARAA is the premier luxury watch marketplace connecting collectors with the world\'s finest timepieces.',
    'page.contact.title':     'Contact Us',
    'page.contact.desc':      'Our horological advisors are here to help you find the perfect timepiece.',

    // ── Services Page ──
    'services.auth':          'Authentication & Verification',
    'services.auth.desc':     'Every timepiece listed on ZIFARAA undergoes rigorous authentication by certified horologists. We verify movement serial numbers, case materials, dial originality, and complete provenance documentation.',
    'services.concierge':     'Personal Shopping Concierge',
    'services.concierge.desc':'Our dedicated advisors provide bespoke guidance — from sourcing rare references to building a curated collection aligned with your taste and investment goals.',
    'services.shipping':      'White-Glove Delivery',
    'services.shipping.desc': 'Fully insured, temperature-controlled shipping with real-time tracking. Every watch arrives in ZIFARAA signature packaging with authentication papers.',
    'services.trade':         'Trade-In Programme',
    'services.trade.desc':    'Upgrade your collection. We offer competitive valuations on luxury timepieces and seamless credit toward your next acquisition.',
    'services.care':          'Aftercare & Servicing',
    'services.care.desc':     'Access our network of authorised service centres for maintenance, polishing, and movement servicing — all coordinated through your ZIFARAA account.',
    'services.insurance':     'Watch Insurance',
    'services.insurance.desc':'Protect your investment with comprehensive coverage arranged through our specialist insurance partners, covering theft, loss, and accidental damage.',

    // ── Shared UI ──
    'page.shop_now':          'Shop Now',
    'page.view_all':          'View All',
    'page.explore':           'Explore',
    'page.back_home':         'Back to Home',
    'page.no_products':       'New timepieces arriving soon. Join our list to be notified.',
    'page.founded':           'Founded',
    'page.country':           'Country',
    'page.pieces':            'pieces',
    'page.from_price':        'From',
    'page.cta_consult':       'Book a Consultation',
    'page.breadcrumb.home':   'Home',
  },

  // ── Arabic (RTL) ──
  ar: {
    'nav.collections':  'المجموعات',
    'nav.showcase':     'عرض المنتجات',
    'nav.craft':        'الحرفية',
    'nav.about':        'من نحن',
    'nav.contact':      'تواصل معنا',
    'nav.wishlist':     'المفضلة',
    'nav.cart':         'سلة التسوق',
    'nav.login':        'تسجيل الدخول',
    'nav.logout':       'تسجيل الخروج',
    'nav.account':      'حسابي',
    'hero.eyebrow':     'دقة. إرث. زمن.',
    'hero.line1':       'زيفا',
    'hero.line2':       'را',
    'hero.sub':         'ساعات مختارة من أرقى دور صنع الساعات في العالم',
    'hero.cta':         'استكشف المجموعة',
    'hero.scroll':      'انزل لاكتشاف المزيد',
    'collections.label':   '٠٠١ / المجموعات',
    'collections.heading': 'أربعة عوالم من صناعة الساعات',
    'collections.body':    'كل مجموعة من مجموعات زيفارا تقوم على فكرة واحدة — يتم متابعتها دون تنازل.',
    'collections.explore': 'استكشف المجموعة',
    'marquee.text': 'رولكس — باتيك فيليب — كارتييه — أوميغا — هيرميس — فاشرون قسطنطين — زيفارا — ',
    'products.label':      '٠٠٢ / العرض',
    'products.heading':    'التحرير المختار',
    'products.body':       'اثنا عشر ساعة. أربعة فلسفات. معيار واحد للتميز.',
    'products.filter.all': 'الكل',
    'products.add_cart':   'أضف إلى السلة',
    'products.add_wish':   'حفظ',
    'products.view':       'عرض التفاصيل',
    'products.in_stock':   'متوفر',
    'products.notify':     'أخطرني',
    'products.from':       'يبدأ من',
    'products.added':      'تمت الإضافة إلى السلة',
    'craft.label':         '٠٠٣ / الحرفية',
    'craft.heading':       'حيث يلتقي الشغف بالحرفة',
    'craft.body':          'تم تقييم كل ساعة في كتالوج زيفارا وفق ٤٧ معياراً فردياً — تشطيب الحركة ووضوح الكريستال وجودة الحزام وتوحد الإضاءة والوزن الدقيق للتاج.',
    'craft.note':          'نحن نختار حتى لا تتنازل.',
    'craft.stat1.value':   '٤٧',
    'craft.stat1.label':   'معيار الجودة',
    'craft.stat2.value':   '٢٠٠٠',
    'craft.stat2.label':   'ساعة تم تقييمها',
    'craft.stat3.value':   '١٢',
    'craft.stat3.label':   'في التحرير النهائي',
    'craft.stat4.value':   '٤',
    'craft.stat4.label':   'مجموعات',
    'craft.marquee': 'حركة سويسرية — كريستال ياقوتي — فولاذ ٣١٦ل — دقة — تراث — ',
    'about.label':    '٠٠٤ / من نحن',
    'about.heading':  'وُلدت من حب علم الساعات',
    'about.body1':    'وُلدت زيفارا من إحباط بسيط: أرقى ساعات العالم — رولكس، باتيك فيليب، كارتييه، أوميغا، هيرميس، فاشرون قسطنطين — كانت مبعثرة بين بوتيكات جنيف وطوكيو ونيويورك.',
    'about.body2':    'بنينا زيفارا كسوق فاخر للجامعين المميزين. كل قطعة معروضة تم التحقق من أصالتها وحالتها ومصدرها. نربطكم مباشرة بتجار معتمدين وموزعين موثوقين حول العالم.',
    'about.body3':    'زيفارا — حيث تجد أرقى ساعات العالم جامعها التالي.',
    'about.cta':      'قصتنا',
    'testimonials.label':   '٠٠٥ / التقييمات',
    'testimonials.heading': 'ما يقوله الجامعون',
    'contact.label':       '٠٠٦ / استشارة',
    'contact.heading':     'احجز استشارة خاصة',
    'contact.body':        'غير متأكد من الساعة المناسبة لك؟ مستشارونا الساعاتيون متاحون لاستشارات فردية — بموعد مسبق ومجاناً.',
    'contact.name':        'اسمك',
    'contact.email':       'البريد الإلكتروني',
    'contact.phone':       'الهاتف (اختياري)',
    'contact.message':     'أخبرنا بما تبحث عنه',
    'contact.submit':      'إرسال الطلب',
    'contact.success':     'تم استلام طلبك. سنتواصل معك خلال ٢٤ ساعة.',
    'footer.tagline':       'ساعات فاخرة مختارة.',
    'footer.nav.label':     'التنقل',
    'footer.collections':   'المجموعات',
    'footer.about':         'عن زيفارا',
    'footer.contact':       'تواصل معنا',
    'footer.shipping':      'الشحن والمرتجعات',
    'footer.care':          'العناية بالساعة',
    'footer.privacy':       'سياسة الخصوصية',
    'footer.terms':         'شروط الخدمة',
    'footer.address':       '١٤ ميدان الساعاتيين\nجنيف، سويسرا CH-1205',
    'footer.email':         'hello@zifaraa.com',
    'footer.phone':         '+41 22 000 0000',
    'footer.social.ig':     'إنستغرام',
    'footer.social.fb':     'فيسبوك',
    'footer.social.x':      'إكس (تويتر)',
    'footer.social.yt':     'يوتيوب',
    'footer.copyright':     '© ٢٠٢٥ زيفارا تايمبيسس. جميع الحقوق محفوظة.',
    'cart.heading':      'اختيارك',
    'cart.empty':        'سلة التسوق فارغة',
    'cart.empty.sub':    'اكتشف ساعات تليق بمجموعتك.',
    'cart.empty.cta':    'تصفح الساعات',
    'cart.subtotal':     'المجموع الفرعي',
    'cart.shipping':     'الشحن',
    'cart.shipping.val': 'يُحسب عند الدفع',
    'cart.total':        'الإجمالي التقديري',
    'cart.proceed':      'المتابعة للدفع',
    'cart.remove':       'إزالة',
    'cart.qty':          'الكمية',
    'wishlist.heading':  'الساعات المحفوظة',
    'wishlist.empty':    'لا توجد ساعات محفوظة بعد',
    'wishlist.empty.sub':'أضف القطع التي تعجبك إلى قائمة أمنياتك.',
    'wishlist.empty.cta':'استكشف المجموعات',
    'wishlist.move':     'نقل إلى السلة',
    'wishlist.remove':   'إزالة',
    'auth.heading.login':    'مرحباً بعودتك',
    'auth.heading.register': 'إنشاء حساب',
    'auth.tab.login':        'تسجيل الدخول',
    'auth.tab.register':     'التسجيل',
    'auth.email':            'البريد الإلكتروني',
    'auth.password':         'كلمة المرور',
    'auth.password.confirm': 'تأكيد كلمة المرور',
    'auth.name':             'الاسم الكامل',
    'auth.forgot':           'نسيت كلمة المرور؟',
    'auth.submit.login':     'تسجيل الدخول',
    'auth.submit.register':  'إنشاء الحساب',
    'auth.switch.register':  'ليس لديك حساب؟ سجّل الآن',
    'auth.switch.login':     'لديك حساب بالفعل؟ سجّل دخولك',
    'auth.logout.success':   'تم تسجيل خروجك.',
    'checkout.title':         'الدفع',
    'checkout.step.review':   'مراجعة',
    'checkout.step.shipping': 'الشحن',
    'checkout.step.payment':  'الدفع',
    'checkout.step.confirmed':'تم التأكيد',
    'checkout.back':          'رجوع',
    'checkout.next':          'متابعة',
    'checkout.place':         'تأكيد الطلب',
    'checkout.processing':    'جارٍ المعالجة…',
    'checkout.shipping.name': 'الاسم الكامل',
    'checkout.shipping.email':'البريد الإلكتروني',
    'checkout.shipping.phone':'رقم الهاتف',
    'checkout.shipping.addr1':'العنوان السطر الأول',
    'checkout.shipping.addr2':'العنوان السطر الثاني (اختياري)',
    'checkout.shipping.city': 'المدينة',
    'checkout.shipping.zip':  'الرمز البريدي',
    'checkout.shipping.country': 'الدولة',
    'checkout.payment.card':  'تفاصيل البطاقة',
    'checkout.summary':       'ملخص الطلب',
    'checkout.confirmed.heading': 'تم تأكيد الطلب',
    'checkout.confirmed.body': 'تم استلام طلبك. ستصلك رسالة تأكيد عبر البريد الإلكتروني قريباً.',
    'checkout.confirmed.order': 'الطلب',
    'checkout.confirmed.cta': 'مواصلة التسوق',
    'modal.movement':      'الحركة',
    'modal.diameter':      'قطر العلبة',
    'modal.thickness':     'السماكة',
    'modal.crystal':       'الكريستال',
    'modal.water':         'مقاومة الماء',
    'modal.power':         'احتياطي الطاقة',
    'modal.case':          'مادة العلبة',
    'modal.strap':         'السوار',
    'modal.add_cart':      'أضف إلى السلة',
    'modal.add_wish':      'أضف إلى المفضلة',
    'modal.remove_wish':   'إزالة من المفضلة',
    'modal.in_stock':      'متوفر',
    'modal.notify':        'أخطرني عند التوفر',
    'modal.close':         'إغلاق',
    'error.required':      'هذا الحقل مطلوب',
    'error.email':         'أدخل بريداً إلكترونياً صحيحاً',
    'error.password.short':'يجب أن تكون كلمة المرور ٨ أحرف على الأقل',
    'error.password.match':'كلمتا المرور غير متطابقتين',
    'misc.loading':        'جارٍ التحميل…',
    'misc.currency':       'USD',
  },

  // ── Persian / Farsi (RTL) ──
  fa: {
    'nav.collections':  'مجموعه‌ها',
    'nav.showcase':     'ویترین',
    'nav.craft':        'هنر ساعت‌سازی',
    'nav.about':        'درباره ما',
    'nav.contact':      'تماس',
    'nav.wishlist':     'علاقه‌مندی‌ها',
    'nav.cart':         'سبد خرید',
    'nav.login':        'ورود',
    'nav.logout':       'خروج',
    'nav.account':      'حساب کاربری',
    'hero.eyebrow':     'دقت. میراث. زمان.',
    'hero.line1':       'زیفا',
    'hero.line2':       'را',
    'hero.sub':         'ساعت‌های منتخب از بهترین کارگاه‌های جهان',
    'hero.cta':         'کشف مجموعه',
    'hero.scroll':      'برای کشف بیشتر اسکرول کنید',
    'collections.label':   '۰۰۱ / مجموعه‌ها',
    'collections.heading': 'چهار دنیای ساعت‌سازی',
    'collections.body':    'هر مجموعه زیفارا حول یک ایده ساخته شده — و بدون سازش دنبال می‌شود.',
    'collections.explore': 'کشف مجموعه',
    'marquee.text': 'رولکس — پاتک فیلیپ — کارتیه — امگا — هرمس — واشرون کنستانتین — زیفارا — ',
    'products.label':      '۰۰۲ / ویترین',
    'products.heading':    'انتخاب ویژه',
    'products.body':       'دوازده ساعت. چهار فلسفه. یک استاندارد تعالی.',
    'products.filter.all': 'همه',
    'products.add_cart':   'افزودن به سبد',
    'products.add_wish':   'ذخیره',
    'products.view':       'مشاهده جزئیات',
    'products.in_stock':   'موجود',
    'products.notify':     'اطلاع‌رسانی',
    'products.from':       'از',
    'products.added':      'به سبد افزوده شد',
    'craft.label':         '۰۰۳ / هنر ساعت‌سازی',
    'craft.heading':       'جایی که عشق با هنر می‌آمیزد',
    'craft.body':          'هر ساعت در کاتالوگ زیفارا بر اساس ۴۷ معیار جداگانه ارزیابی شده — تمیزکاری موور، شفافیت کریستال، کیفیت بند و یکنواختی نور.',
    'craft.note':          'ما انتخاب می‌کنیم تا شما تنازل نکنید.',
    'craft.stat1.value':   '۴۷',
    'craft.stat1.label':   'معیار کیفیت',
    'craft.stat2.value':   '۲۰۰۰',
    'craft.stat2.label':   'ساعت ارزیابی‌شده',
    'craft.stat3.value':   '۱۲',
    'craft.stat3.label':   'در انتخاب نهایی',
    'craft.stat4.value':   '۴',
    'craft.stat4.label':   'مجموعه',
    'craft.marquee': 'موور سوئیسی — کریستال یاقوت — فولاد ۳۱۶ال — دقت — میراث — ',
    'about.label':    '۰۰۴ / درباره ما',
    'about.heading':  'متولد شده از عشق به ساعت‌شناسی',
    'about.body1':    'زیفارا از یک ناامیدی ساده زاده شد: بهترین ساعت‌های جهان — رولکس، پاتک فیلیپ، کارتیه، امگا، هرمس، واشرون کنستانتین — در بوتیک‌های ژنو، توکیو و نیویورک پراکنده بودند.',
    'about.body2':    'ما زیفارا را به عنوان بازار لوکس برتر برای کلکسیونرهای باذوق ساختیم. هر قطعه از نظر اصالت، وضعیت و سابقه تأیید شده است. ما شما را مستقیماً به فروشندگان مجاز متصل می‌کنیم.',
    'about.body3':    'زیفارا — جایی که بهترین ساعت‌های جهان کلکسیونر بعدی خود را پیدا می‌کنند.',
    'about.cta':      'داستان ما',
    'testimonials.label':   '۰۰۵ / نظرات',
    'testimonials.heading': 'نظر کلکسیونرها',
    'contact.label':       '۰۰۶ / مشاوره',
    'contact.heading':     'رزرو مشاوره خصوصی',
    'contact.body':        'مطمئن نیستید کدام ساعت مناسب شماست؟ مشاوران ساعت‌شناس ما برای مشاوره‌های فردی در دسترس هستند — با وقت قبلی و رایگان.',
    'contact.name':        'نام شما',
    'contact.email':       'آدرس ایمیل',
    'contact.phone':       'تلفن (اختیاری)',
    'contact.message':     'به ما بگویید دنبال چه می‌گردید',
    'contact.submit':      'ارسال درخواست',
    'contact.success':     'درخواست شما دریافت شد. ظرف ۲۴ ساعت با شما تماس می‌گیریم.',
    'footer.tagline':       'ساعت‌های لوکس منتخب.',
    'footer.nav.label':     'ناوبری',
    'footer.collections':   'مجموعه‌ها',
    'footer.about':         'درباره زیفارا',
    'footer.contact':       'تماس',
    'footer.shipping':      'ارسال و مرجوعی',
    'footer.care':          'مراقبت از ساعت',
    'footer.privacy':       'حریم خصوصی',
    'footer.terms':         'شرایط خدمات',
    'footer.address':       '۱۴ میدان ساعت‌سازان\nژنو، سوئیس CH-1205',
    'footer.email':         'hello@zifaraa.com',
    'footer.phone':         '+41 22 000 0000',
    'footer.social.ig':     'اینستاگرام',
    'footer.social.fb':     'فیسبوک',
    'footer.social.x':      'ایکس (توییتر)',
    'footer.social.yt':     'یوتیوب',
    'footer.copyright':     '© ۲۰۲۵ زیفارا تایم‌پیسز. تمامی حقوق محفوظ است.',
    'cart.heading':      'انتخاب شما',
    'cart.empty':        'سبد خرید خالی است',
    'cart.empty.sub':    'ساعت‌های شایسته مجموعه‌تان را کشف کنید.',
    'cart.empty.cta':    'مرور ساعت‌ها',
    'cart.subtotal':     'جمع جزئی',
    'cart.shipping':     'ارسال',
    'cart.shipping.val': 'در تسویه حساب محاسبه می‌شود',
    'cart.total':        'جمع تخمینی',
    'cart.proceed':      'ادامه به تسویه',
    'cart.remove':       'حذف',
    'cart.qty':          'تعداد',
    'wishlist.heading':  'ساعت‌های ذخیره‌شده',
    'wishlist.empty':    'هنوز ساعتی ذخیره نشده',
    'wishlist.empty.sub':'قطعاتی که دوست دارید به علاقه‌مندی‌ها اضافه کنید.',
    'wishlist.empty.cta':'کشف مجموعه‌ها',
    'wishlist.move':     'انتقال به سبد',
    'wishlist.remove':   'حذف',
    'auth.heading.login':    'خوش برگشتید',
    'auth.heading.register': 'ایجاد حساب',
    'auth.tab.login':        'ورود',
    'auth.tab.register':     'ثبت‌نام',
    'auth.email':            'آدرس ایمیل',
    'auth.password':         'رمز عبور',
    'auth.password.confirm': 'تأیید رمز عبور',
    'auth.name':             'نام کامل',
    'auth.forgot':           'رمز عبور را فراموش کردید؟',
    'auth.submit.login':     'ورود',
    'auth.submit.register':  'ایجاد حساب',
    'auth.switch.register':  'حساب ندارید؟ ثبت‌نام کنید',
    'auth.switch.login':     'قبلاً ثبت‌نام کردید؟ وارد شوید',
    'auth.logout.success':   'از حساب خارج شدید.',
    'checkout.title':         'تسویه حساب',
    'checkout.step.review':   'بررسی',
    'checkout.step.shipping': 'ارسال',
    'checkout.step.payment':  'پرداخت',
    'checkout.step.confirmed':'تأیید شد',
    'checkout.back':          'بازگشت',
    'checkout.next':          'ادامه',
    'checkout.place':         'ثبت سفارش',
    'checkout.processing':    'در حال پردازش…',
    'checkout.shipping.name': 'نام کامل',
    'checkout.shipping.email':'آدرس ایمیل',
    'checkout.shipping.phone':'شماره تلفن',
    'checkout.shipping.addr1':'آدرس خط ۱',
    'checkout.shipping.addr2':'آدرس خط ۲ (اختیاری)',
    'checkout.shipping.city': 'شهر',
    'checkout.shipping.zip':  'کد پستی',
    'checkout.shipping.country': 'کشور',
    'checkout.payment.card':  'اطلاعات کارت',
    'checkout.summary':       'خلاصه سفارش',
    'checkout.confirmed.heading': 'سفارش تأیید شد',
    'checkout.confirmed.body': 'سفارش شما دریافت شد. ایمیل تأیید به زودی ارسال می‌شود.',
    'checkout.confirmed.order': 'سفارش',
    'checkout.confirmed.cta': 'ادامه خرید',
    'modal.movement':      'موور',
    'modal.diameter':      'قطر کیس',
    'modal.thickness':     'ضخامت',
    'modal.crystal':       'کریستال',
    'modal.water':         'مقاومت در برابر آب',
    'modal.power':         'ذخیره انرژی',
    'modal.case':          'جنس کیس',
    'modal.strap':         'بند',
    'modal.add_cart':      'افزودن به سبد',
    'modal.add_wish':      'افزودن به علاقه‌مندی‌ها',
    'modal.remove_wish':   'حذف از علاقه‌مندی‌ها',
    'modal.in_stock':      'موجود',
    'modal.notify':        'اطلاع‌رسانی هنگام موجودی',
    'modal.close':         'بستن',
    'error.required':      'این فیلد الزامی است',
    'error.email':         'یک آدرس ایمیل معتبر وارد کنید',
    'error.password.short':'رمز عبور باید حداقل ۸ کاراکتر باشد',
    'error.password.match':'رمزهای عبور مطابقت ندارند',
    'misc.loading':        'در حال بارگذاری…',
    'misc.currency':       'USD',
  }
};


// ── DATA: PRODUCTS ──


var COLLECTIONS = [
  {
    id: 'heritage',
    name: 'Heritage Icons',
    tagline: 'Timeless elegance, perfected',
    description: 'Classic dress watches from the legendary maisons of Swiss and French horology. Heritage Icons celebrates the enduring codes of elegance — refined dials, precious metals, and movements honed over generations.',
    cover: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=1200&q=80&fm=webp',
    color: '#c9a84c'
  },
  {
    id: 'sports',
    name: 'Sports & Adventure',
    tagline: 'Precision without compromise',
    description: 'Professional dive watches, chronographs, and GMT instruments built for those who demand performance without sacrificing style. From ocean depths to the cockpit, these are the watches that keep pace with life.',
    cover: 'https://images.unsplash.com/photo-1622434641406-a158123450f9?w=1200&q=80&fm=webp',
    color: '#c9a84c'
  },
  {
    id: 'haute',
    name: 'Haute Horlogerie',
    tagline: 'Complications worthy of the cosmos',
    description: 'Grand complications and haute horlogerie from the most revered ateliers. Annual calendars, moon phases, and hand-finished movements — for the collector who considers time an art form.',
    cover: 'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=1200&q=80&fm=webp',
    color: '#c9a84c'
  },
  {
    id: 'modern',
    name: 'Modern Luxury',
    tagline: 'Innovation meets refinement',
    description: 'Contemporary luxury for the new generation of watch enthusiasts. From the ateliers of Hermes to the innovation labs of Apple, Modern Luxury redefines what a timepiece can be.',
    cover: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=1200&q=80&fm=webp',
    color: '#c9a84c'
  }
];

var PRODUCTS = [
  // ═══════════════════ ROLEX (5) ═══════════════════
  { id:'rol-sub', name:'Rolex Submariner Date', collection:'sports', brand:'rolex', gender:['mens','boys'], tags:['diver','sport','iconic'], price:10250, currency:'USD', description:'The reference among diver\'s watches since 1953. The Submariner Date in Oystersteel with a black Cerachrom bezel is the ultimate tool watch — equally at home at 300 metres depth as at a Michelin-starred dinner.', specs:{ movement:'Rolex Calibre 3235, Automatic', caseDiameter:'41mm', caseThickness:'12.5mm', crystal:'Sapphire with Cyclops lens', waterResistance:'300m', powerReserve:'70 hours', caseMaterial:'Oystersteel', strapMaterial:'Oyster bracelet, Oystersteel' }, images:['https://images.unsplash.com/photo-1622434641406-a158123450f9?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1526045431048-f857369baa09?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80&fm=webp'], inStock:true, featured:true, badge:'Bestseller' },
  { id:'rol-day', name:'Rolex Cosmograph Daytona', collection:'sports', brand:'rolex', gender:['mens'], tags:['chronograph','sport','iconic','limited-edition'], price:15450, currency:'USD', description:'Born for the track. The Daytona chronograph in Oystersteel features a black ceramic Cerachrom bezel with an engraved tachymetric scale — the ultimate instrument for measuring elapsed time and average speed.', specs:{ movement:'Rolex Calibre 4131, Automatic', caseDiameter:'40mm', caseThickness:'12.2mm', crystal:'Sapphire with anti-reflective coating', waterResistance:'100m', powerReserve:'72 hours', caseMaterial:'Oystersteel', strapMaterial:'Oyster bracelet, Oystersteel' }, images:['https://images.unsplash.com/photo-1548171915-e79a380a2a4b?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1526045431048-f857369baa09?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1622434641406-a158123450f9?w=800&q=80&fm=webp'], inStock:true, featured:true, badge:'Iconic' },
  { id:'rol-gmt', name:'Rolex GMT-Master II', collection:'sports', brand:'rolex', gender:['mens'], tags:['gmt','travel','sport'], price:11300, currency:'USD', description:'Designed for pilots and world travellers. The GMT-Master II tracks two time zones simultaneously via a rotatable 24-hour graduated bezel with a distinctive blue and black Cerachrom insert.', specs:{ movement:'Rolex Calibre 3285, Automatic', caseDiameter:'40mm', caseThickness:'12.1mm', crystal:'Sapphire with Cyclops lens', waterResistance:'100m', powerReserve:'70 hours', caseMaterial:'Oystersteel', strapMaterial:'Jubilee bracelet, Oystersteel' }, images:['https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1548171915-e79a380a2a4b?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1622434641406-a158123450f9?w=800&q=80&fm=webp'], inStock:true, featured:false, badge:null },
  { id:'rol-dj41', name:'Rolex Datejust 41', collection:'heritage', brand:'rolex', gender:['mens','womens'], tags:['dress','classic'], price:10800, currency:'USD', description:'The quintessential Rolex. The Datejust 41 in Oystersteel and white gold features a bright blue dial and jubilee bracelet — a watch that has defined modern elegance since 1945.', specs:{ movement:'Rolex Calibre 3235, Automatic', caseDiameter:'41mm', caseThickness:'12.3mm', crystal:'Sapphire with Cyclops lens', waterResistance:'100m', powerReserve:'70 hours', caseMaterial:'Oystersteel & 18K White Gold', strapMaterial:'Jubilee bracelet, Oystersteel' }, images:['https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1526045431048-f857369baa09?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80&fm=webp'], inStock:true, featured:true, badge:'Classic' },
  { id:'rol-dd', name:'Rolex Day-Date 36', collection:'heritage', brand:'rolex', gender:['mens','womens'], tags:['dress','classic','limited-edition'], price:40500, currency:'USD', description:'The President\'s watch. The Day-Date 36 in 18K yellow gold with a champagne diamond-set dial, available exclusively in precious metals since 1956, remains the ultimate symbol of prestige.', specs:{ movement:'Rolex Calibre 3255, Automatic', caseDiameter:'36mm', caseThickness:'12.1mm', crystal:'Sapphire with Cyclops lens', waterResistance:'100m', powerReserve:'70 hours', caseMaterial:'18K Yellow Gold', strapMaterial:'President bracelet, 18K Yellow Gold' }, images:['https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1526045431048-f857369baa09?w=800&q=80&fm=webp'], inStock:true, featured:false, badge:'Prestige' },

  // ═══════════════════ PATEK PHILIPPE (5) ═══════════════════
  { id:'pp-naut', name:'Patek Philippe Nautilus', collection:'sports', brand:'patek-philippe', gender:['mens'], tags:['sport','iconic','limited-edition'], price:36780, currency:'USD', description:'Gerald Genta\'s 1976 masterpiece. The Nautilus 5711 with its porthole-inspired octagonal bezel and horizontally embossed blue dial is among the most sought-after watches in the world.', specs:{ movement:'Patek Philippe Calibre 26-330 S C, Automatic', caseDiameter:'40mm', caseThickness:'8.3mm', crystal:'Sapphire, anti-reflective', waterResistance:'120m', powerReserve:'45 hours', caseMaterial:'Stainless Steel', strapMaterial:'Integrated steel bracelet' }, images:['https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=800&q=80&fm=webp'], inStock:false, featured:true, badge:'Waitlist' },
  { id:'pp-aqua', name:'Patek Philippe Aquanaut', collection:'sports', brand:'patek-philippe', gender:['mens','boys'], tags:['sport','travel'], price:23260, currency:'USD', description:'The younger, sportier sibling of the Nautilus. The Aquanaut 5167A with its rounded octagonal case and tropical strap has become a modern icon for the adventurous collector.', specs:{ movement:'Patek Philippe Calibre 324 S C, Automatic', caseDiameter:'40mm', caseThickness:'8.1mm', crystal:'Sapphire, anti-reflective', waterResistance:'120m', powerReserve:'45 hours', caseMaterial:'Stainless Steel', strapMaterial:'Tropical composite strap' }, images:['https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800&q=80&fm=webp'], inStock:true, featured:false, badge:'New Arrival' },
  { id:'pp-cal', name:'Patek Philippe Calatrava', collection:'heritage', brand:'patek-philippe', gender:['mens'], tags:['dress','classic'], price:38070, currency:'USD', description:'The Calatrava 5227R embodies the pure essence of the round wristwatch. An officer-style hinged caseback in 18K rose gold reveals a hand-finished Calibre 324 SC — understated perfection from Geneva.', specs:{ movement:'Patek Philippe Calibre 324 SC, Automatic', caseDiameter:'39mm', caseThickness:'9.24mm', crystal:'Sapphire, anti-reflective', waterResistance:'30m', powerReserve:'45 hours', caseMaterial:'18K Rose Gold', strapMaterial:'Alligator leather, 18K rose gold buckle' }, images:['https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=800&q=80&fm=webp'], inStock:true, featured:true, badge:'Maison' },
  { id:'pp-cub', name:'Patek Philippe Cubitus', collection:'modern', brand:'patek-philippe', gender:['mens'], tags:['sport','new-arrival'], price:46900, currency:'USD', description:'The newest icon from Patek Philippe. The Cubitus presents a bold cushion-shaped case — the maison\'s first new sport watch silhouette in nearly fifty years, signalling a new chapter in Geneva.', specs:{ movement:'Patek Philippe Calibre 240 PS C, Automatic', caseDiameter:'45mm', caseThickness:'8.2mm', crystal:'Sapphire, anti-reflective', waterResistance:'30m', powerReserve:'48 hours', caseMaterial:'Stainless Steel & 18K Rose Gold', strapMaterial:'Integrated two-tone bracelet' }, images:['https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800&q=80&fm=webp'], inStock:false, featured:true, badge:'By Request' },
  { id:'pp-gc', name:'Patek Philippe Grand Complications', collection:'haute', brand:'patek-philippe', gender:['mens'], tags:['complication','limited-edition'], price:198500, currency:'USD', description:'A perpetual calendar, minute repeater, and split-seconds chronograph in a single 18K white gold case. The Grand Complications 5270G represents the pinnacle of Geneva watchmaking.', specs:{ movement:'Patek Philippe Calibre CH 29-535 PS Q, Manual-wind', caseDiameter:'41mm', caseThickness:'12.4mm', crystal:'Sapphire, anti-reflective', waterResistance:'30m', powerReserve:'65 hours', caseMaterial:'18K White Gold', strapMaterial:'Alligator leather, 18K white gold buckle' }, images:['https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=800&q=80&fm=webp'], inStock:false, featured:false, badge:'Museum Piece' },

  // ═══════════════════ CARTIER (5) ═══════════════════
  { id:'car-santos', name:'Cartier Santos de Cartier', collection:'heritage', brand:'cartier', gender:['mens'], tags:['classic','iconic'], price:7750, currency:'USD', description:'The first modern wristwatch, created in 1904 for aviator Alberto Santos-Dumont. The Santos in steel features a medium model with exposed screws, interchangeable bracelet and strap, and the QuickSwitch system.', specs:{ movement:'Cartier Calibre 1847 MC, Automatic', caseDiameter:'39.8mm', caseThickness:'9.08mm', crystal:'Sapphire crystal', waterResistance:'100m', powerReserve:'40 hours', caseMaterial:'Stainless Steel', strapMaterial:'Steel bracelet + calfskin strap (QuickSwitch)' }, images:['https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&q=80&fm=webp'], inStock:true, featured:true, badge:'Iconic' },
  { id:'car-tank', name:'Cartier Tank Française', collection:'heritage', brand:'cartier', gender:['womens','girls'], tags:['dress','classic','petite'], price:4300, currency:'USD', description:'First created in 1917, the Tank remains one of the most recognisable silhouettes in all of watchmaking. The Tank Française in steel, with its fluid integration of case and bracelet, is Cartier at its most architectural.', specs:{ movement:'Cartier Quartz', caseDiameter:'32 × 27mm', caseThickness:'6.5mm', crystal:'Sapphire crystal', waterResistance:'30m', powerReserve:'Battery', caseMaterial:'Stainless Steel', strapMaterial:'Steel bracelet with butterfly clasp' }, images:['https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80&fm=webp'], inStock:true, featured:false, badge:null },
  { id:'car-ballon', name:'Cartier Ballon Bleu', collection:'haute', brand:'cartier', gender:['womens','mens'], tags:['dress','classic'], price:7400, currency:'USD', description:'Named for the blue sapphire cabochon that appears to float within its crown guard, the Ballon Bleu is Cartier\'s most recognisable modern icon. The silvered guilloché dial and Roman numerals speak to two centuries of Parisian savoir-faire.', specs:{ movement:'Cartier Calibre 1847 MC, Automatic', caseDiameter:'40mm', caseThickness:'12.4mm', crystal:'Sapphire crystal', waterResistance:'30m', powerReserve:'40 hours', caseMaterial:'Stainless Steel', strapMaterial:'Steel bracelet with butterfly clasp' }, images:['https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80&fm=webp'], inStock:true, featured:false, badge:null },
  { id:'car-panth', name:'Cartier Panthère', collection:'heritage', brand:'cartier', gender:['womens','girls'], tags:['dress','petite','iconic'], price:4600, currency:'USD', description:'Unmistakably feminine. The Panthère de Cartier in yellow gold and steel with its fluid chain-link bracelet is a jewellery watch icon — effortlessly elegant on any wrist.', specs:{ movement:'Cartier Quartz', caseDiameter:'27 × 37mm', caseThickness:'6mm', crystal:'Sapphire crystal', waterResistance:'30m', powerReserve:'Battery', caseMaterial:'Stainless Steel & 18K Yellow Gold', strapMaterial:'Steel and gold chain-link bracelet' }, images:['https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&q=80&fm=webp'], inStock:true, featured:false, badge:null },
  { id:'car-pasha', name:'Cartier Pasha de Cartier', collection:'modern', brand:'cartier', gender:['mens','womens'], tags:['dress','new-arrival'], price:8050, currency:'USD', description:'A round watch with character. The Pasha 41mm features the signature chained crown cap, interchangeable straps, and a striking guilloché dial — Cartier\'s bold answer to the everyday luxury watch.', specs:{ movement:'Cartier Calibre 1847 MC, Automatic', caseDiameter:'41mm', caseThickness:'9.55mm', crystal:'Sapphire crystal', waterResistance:'100m', powerReserve:'40 hours', caseMaterial:'Stainless Steel', strapMaterial:'Alligator leather + steel bracelet (interchangeable)' }, images:['https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80&fm=webp'], inStock:true, featured:false, badge:'New Arrival' },

  // ═══════════════════ HERMÈS (5) ═══════════════════
  { id:'her-h08', name:'Hermès H08', collection:'modern', brand:'hermes', gender:['mens','boys'], tags:['sport','new-arrival'], price:5300, currency:'USD', description:'A graphic, contemporary sports watch. The H08 in titanium and composite features a cushion-shaped case with architectural lines — Hermès reimagining the modern tool watch through the lens of Parisian design.', specs:{ movement:'Hermès H1837, Automatic', caseDiameter:'39mm', caseThickness:'10.5mm', crystal:'Sapphire, anti-reflective', waterResistance:'100m', powerReserve:'50 hours', caseMaterial:'Titanium & Glass Fibre Composite', strapMaterial:'Rubber strap' }, images:['https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&q=80&fm=webp'], inStock:true, featured:false, badge:'New Arrival' },
  { id:'her-arceau', name:'Hermès Arceau Automatique', collection:'heritage', brand:'hermes', gender:['womens','mens'], tags:['dress','equestrian'], price:5600, currency:'USD', description:'Designed by Henri d\'Origny in 1978, the Arceau\'s asymmetric lugs and italic numerals are unmistakably Hermès. The silvered dial, Swiss automatic movement, and hand-stitched barenia strap bring the maison\'s equestrian heritage to the wrist.', specs:{ movement:'Hermès H1837, Automatic', caseDiameter:'40mm', caseThickness:'10.2mm', crystal:'Sapphire, anti-reflective', waterResistance:'30m', powerReserve:'50 hours', caseMaterial:'Stainless Steel', strapMaterial:'Hermès Barenia calfskin leather' }, images:['https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=800&q=80&fm=webp'], inStock:true, featured:false, badge:null },
  { id:'her-cape', name:'Hermès Cape Cod', collection:'heritage', brand:'hermes', gender:['womens','girls'], tags:['dress','petite','classic'], price:3600, currency:'USD', description:'The Cape Cod\'s anchor-chain inspired double-wrap strap is pure Hermès. The small model in steel with a white lacquered dial and Hermès orange strap is a statement of understated Parisian chic.', specs:{ movement:'Swiss Quartz', caseDiameter:'29 × 29mm', caseThickness:'7mm', crystal:'Sapphire crystal', waterResistance:'30m', powerReserve:'Battery', caseMaterial:'Stainless Steel', strapMaterial:'Swift calfskin double tour' }, images:['https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&q=80&fm=webp'], inStock:true, featured:false, badge:null },
  { id:'her-heure', name:'Hermès Heure H', collection:'modern', brand:'hermes', gender:['womens'], tags:['dress','petite'], price:3250, currency:'USD', description:'The H is the anchor. The Heure H transforms the Hermès initial into a case design — minimalist, graphic, and immediately recognisable. White lacquered dial with a blue calfskin strap.', specs:{ movement:'Swiss Quartz', caseDiameter:'26 × 26mm', caseThickness:'7.2mm', crystal:'Sapphire crystal', waterResistance:'30m', powerReserve:'Battery', caseMaterial:'Stainless Steel', strapMaterial:'Hermès Epsom calfskin' }, images:['https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=800&q=80&fm=webp'], inStock:true, featured:false, badge:null },
  { id:'her-cut', name:'Hermès Cut', collection:'modern', brand:'hermes', gender:['womens','girls'], tags:['dress','petite','new-arrival'], price:3550, currency:'USD', description:'Geometry meets movement. The Cut features an asymmetrically cut case inspired by Hermès silk scarves — a wearable piece of art that plays with light from every angle.', specs:{ movement:'Swiss Quartz', caseDiameter:'36 × 36mm', caseThickness:'7.5mm', crystal:'Sapphire crystal', waterResistance:'30m', powerReserve:'Battery', caseMaterial:'Stainless Steel', strapMaterial:'Swift calfskin leather' }, images:['https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&q=80&fm=webp'], inStock:true, featured:false, badge:'New Arrival' },

  // ═══════════════════ OMEGA (5) ═══════════════════
  { id:'omg-speed', name:'Omega Speedmaster Moonwatch', collection:'sports', brand:'omega', gender:['mens','boys'], tags:['chronograph','sport','iconic'], price:6900, currency:'USD', description:'The first watch worn on the Moon. The Speedmaster Professional with its legendary Calibre 3861 manual-wind movement and hesalite crystal remains faithful to the original 1960s design that NASA chose for spaceflight.', specs:{ movement:'Omega Calibre 3861, Manual-wind', caseDiameter:'42mm', caseThickness:'13.18mm', crystal:'Hesalite (acrylic)', waterResistance:'50m', powerReserve:'50 hours', caseMaterial:'Stainless Steel', strapMaterial:'Stainless steel bracelet' }, images:['https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?w=800&q=80&fm=webp'], inStock:true, featured:true, badge:'Legendary' },
  { id:'omg-smp', name:'Omega Seamaster Diver 300M', collection:'sports', brand:'omega', gender:['mens'], tags:['diver','sport'], price:5500, currency:'USD', description:'Worn by James Bond and beloved by divers worldwide. The Seamaster 300M features a laser-engraved ceramic dial, Co-Axial Master Chronometer movement, and a helium escape valve for saturation diving.', specs:{ movement:'Omega Co-Axial Master Chronometer 8800', caseDiameter:'42mm', caseThickness:'13.56mm', crystal:'Sapphire with anti-reflective coating', waterResistance:'300m', powerReserve:'55 hours', caseMaterial:'Stainless Steel', strapMaterial:'Steel bracelet with diver extension' }, images:['https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=800&q=80&fm=webp'], inStock:true, featured:false, badge:null },
  { id:'omg-const', name:'Omega Constellation', collection:'heritage', brand:'omega', gender:['womens','mens'], tags:['dress','classic'], price:5800, currency:'USD', description:'Refinement for every occasion. The Constellation 39mm with its half-moon facets, fluted bezel, and integrated bracelet is Omega\'s expression of understated Swiss elegance.', specs:{ movement:'Omega Co-Axial Master Chronometer 8800', caseDiameter:'39mm', caseThickness:'11.8mm', crystal:'Sapphire with anti-reflective coating', waterResistance:'50m', powerReserve:'55 hours', caseMaterial:'Stainless Steel', strapMaterial:'Integrated steel bracelet' }, images:['https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?w=800&q=80&fm=webp'], inStock:true, featured:false, badge:null },
  { id:'omg-deville', name:'Omega De Ville Prestige', collection:'heritage', brand:'omega', gender:['womens'], tags:['dress','classic','petite'], price:3400, currency:'USD', description:'Timeless and graceful. The De Ville Prestige in 27.4mm steel with a white mother-of-pearl dial and diamond markers is Omega\'s most refined expression for women.', specs:{ movement:'Omega Calibre 4061, Quartz', caseDiameter:'27.4mm', caseThickness:'7.8mm', crystal:'Sapphire crystal', waterResistance:'30m', powerReserve:'Battery', caseMaterial:'Stainless Steel', strapMaterial:'Stainless steel bracelet' }, images:['https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=800&q=80&fm=webp'], inStock:true, featured:false, badge:null },
  { id:'omg-aqua', name:'Omega Seamaster Aqua Terra', collection:'modern', brand:'omega', gender:['mens','womens'], tags:['dress','sport'], price:6300, currency:'USD', description:'The watch that bridges land and sea. The Aqua Terra 41mm with its horizontal teak-deck dial pattern and Master Chronometer certification is equally at home in the boardroom and on the yacht.', specs:{ movement:'Omega Co-Axial Master Chronometer 8900', caseDiameter:'41mm', caseThickness:'13.2mm', crystal:'Sapphire with anti-reflective coating', waterResistance:'150m', powerReserve:'60 hours', caseMaterial:'Stainless Steel', strapMaterial:'Steel bracelet or rubber strap' }, images:['https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?w=800&q=80&fm=webp'], inStock:true, featured:false, badge:null },

  // ═══════════════════ APPLE WATCH (5) ═══════════════════
  { id:'aw-ultra2', name:'Apple Watch Ultra 2', collection:'modern', brand:'apple', gender:['mens','womens','boys','girls'], tags:['apple-watch','smart','sport','new-arrival'], price:799, currency:'USD', description:'The most rugged and capable Apple Watch ever made. The 49mm titanium case with flat sapphire crystal is rated to 100 metres, with a customisable Action Button and precision dual-frequency GPS.', specs:{ movement:'Apple S9 SiP, 64-bit dual-core', caseDiameter:'49mm', caseThickness:'14.4mm', crystal:'Flat sapphire crystal', waterResistance:'100m (EN 13319)', powerReserve:'Up to 36 hours', caseMaterial:'Grade 5 Titanium', strapMaterial:'Orange Alpine Loop' }, images:['https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800&q=80&fm=webp'], inStock:true, featured:false, badge:'New Arrival' },
  { id:'aw-s10', name:'Apple Watch Series 10', collection:'modern', brand:'apple', gender:['mens','womens','boys','girls'], tags:['apple-watch','smart','new-arrival'], price:399, currency:'USD', description:'The thinnest Apple Watch ever. The Series 10 features a wider display, faster charging, water depth and temperature sensing, and advanced health monitoring in an aluminium case.', specs:{ movement:'Apple S10 SiP', caseDiameter:'46mm', caseThickness:'9.7mm', crystal:'Ion-X front crystal', waterResistance:'50m (ISO 22810)', powerReserve:'Up to 18 hours', caseMaterial:'Aluminium', strapMaterial:'Sport Band' }, images:['https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=800&q=80&fm=webp'], inStock:true, featured:false, badge:null },
  { id:'aw-se', name:'Apple Watch SE', collection:'modern', brand:'apple', gender:['boys','girls','mens','womens'], tags:['apple-watch','smart'], price:249, currency:'USD', description:'Essential Apple Watch features at an accessible price. The SE delivers crash detection, heart rate monitoring, and workout tracking — perfect for first-time smartwatch owners.', specs:{ movement:'Apple S8 SiP', caseDiameter:'44mm', caseThickness:'10.7mm', crystal:'Ion-X front crystal', waterResistance:'50m (ISO 22810)', powerReserve:'Up to 18 hours', caseMaterial:'Aluminium', strapMaterial:'Sport Band' }, images:['https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800&q=80&fm=webp'], inStock:true, featured:false, badge:null },
  { id:'aw-hermes-u', name:'Apple Watch Hermès Ultra 2', collection:'modern', brand:'apple', gender:['mens','womens'], tags:['apple-watch','smart','limited-edition'], price:1499, currency:'USD', description:'Adventure meets haute couture. The Apple Watch Hermès Ultra 2 pairs titanium durability with an exclusive Hermès Kilim Single Tour strap and unique watch face — luxury for the trail.', specs:{ movement:'Apple S9 SiP', caseDiameter:'49mm', caseThickness:'14.4mm', crystal:'Flat sapphire crystal', waterResistance:'100m (EN 13319)', powerReserve:'Up to 36 hours', caseMaterial:'Grade 5 Titanium', strapMaterial:'Hermès Kilim Single Tour' }, images:['https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=800&q=80&fm=webp'], inStock:true, featured:false, badge:'Exclusive' },
  { id:'aw-hermes', name:'Apple Watch Hermès Series 10', collection:'modern', brand:'apple', gender:['womens','mens','girls'], tags:['apple-watch','smart','new-arrival','limited-edition'], price:1899, currency:'USD', description:'Where Silicon Valley meets the Faubourg Saint-Honoré. The Apple Watch Hermès Series 10 combines Apple\'s advanced health technology with Hermès\' exclusive watch faces and the iconic Bridon Double Tour leather strap.', specs:{ movement:'Apple S10 SiP', caseDiameter:'46mm', caseThickness:'9.7mm', crystal:'Ion-X front crystal', waterResistance:'50m (ISO 22810)', powerReserve:'Up to 18 hours', caseMaterial:'Grade 5 Titanium', strapMaterial:'Hermès Bridon Double Tour leather' }, images:['https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800&q=80&fm=webp'], inStock:true, featured:false, badge:'Exclusive' },

  // ═══════════════════ VACHERON CONSTANTIN (2 — included for haute) ═══════════════════
  { id:'vc-overseas', name:'Vacheron Constantin Overseas', collection:'haute', brand:'vacheron-constantin', gender:['mens'], tags:['travel','limited-edition'], price:24700, currency:'USD', description:'The Overseas Automatic embodies the spirit of travel. Its interchangeable strap system transforms from boardroom to beach in seconds. Geneva-hallmarked Calibre 5100 beats within.', specs:{ movement:'Vacheron Constantin Calibre 5100, Automatic', caseDiameter:'41mm', caseThickness:'11mm', crystal:'Sapphire, anti-reflective', waterResistance:'150m', powerReserve:'60 hours', caseMaterial:'Stainless Steel', strapMaterial:'Steel bracelet + alligator + rubber (interchangeable)' }, images:['https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1609587312208-cea54be969e7?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800&q=80&fm=webp'], inStock:true, featured:true, badge:'Editor\'s Pick' },
  { id:'vc-patri', name:'Vacheron Constantin Patrimony', collection:'haute', brand:'vacheron-constantin', gender:['mens','womens'], tags:['dress','classic','limited-edition'], price:21600, currency:'USD', description:'Pure, elevated, timeless. The Patrimony in 18K pink gold with a silver-toned opaline dial represents the purest expression of Geneva\'s dress watch tradition — since 1755.', specs:{ movement:'Vacheron Constantin Calibre 1400, Manual-wind', caseDiameter:'40mm', caseThickness:'7.2mm', crystal:'Sapphire, anti-reflective', waterResistance:'30m', powerReserve:'40 hours', caseMaterial:'18K Pink Gold', strapMaterial:'Alligator leather, 18K pink gold buckle' }, images:['https://images.unsplash.com/photo-1609587312208-cea54be969e7?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800&q=80&fm=webp','https://images.unsplash.com/photo-1609587312208-cea54be969e7?w=800&q=80&fm=webp'], inStock:true, featured:false, badge:'Maison' }
];

// Integration hook: replace body with real API call
function fetchProducts() {
  // const res = await fetch('https://api.zifaraa.com/products');
  // return res.json();
  return Promise.resolve(PRODUCTS);
}

function getProductById(id) {
  return PRODUCTS.find(p => p.id === id) || null;
}

function getProductsByCollection(collectionId) {
  return PRODUCTS.filter(p => p.collection === collectionId);
}

function getFeaturedProducts() {
  return PRODUCTS.filter(p => p.featured);
}

var BRANDS = [
  { id: 'rolex', name: 'Rolex', country: 'Switzerland', founded: 1905, logo: 'R', description: 'The crown jewel of Swiss watchmaking. Rolex defines modern luxury with unmatched precision, durability, and prestige.' },
  { id: 'patek-philippe', name: 'Patek Philippe', country: 'Switzerland', founded: 1839, logo: 'PP', description: 'You never actually own a Patek Philippe. You merely look after it for the next generation.' },
  { id: 'cartier', name: 'Cartier', country: 'France', founded: 1847, logo: 'C', description: 'The jeweller of kings and king of jewellers. Cartier has defined watch design with icons like the Tank and Santos.' },
  { id: 'omega', name: 'Omega', country: 'Switzerland', founded: 1848, logo: 'Ω', description: 'From the ocean floor to the lunar surface. Omega watches have accompanied humanity\'s greatest achievements.' },
  { id: 'vacheron-constantin', name: 'Vacheron Constantin', country: 'Switzerland', founded: 1755, logo: 'VC', description: 'The world\'s oldest continuously operating watch manufacturer. Over 265 years of uninterrupted haute horlogerie.' },
  { id: 'hermes', name: 'Hermès', country: 'France', founded: 1837, logo: 'H', description: 'Where Parisian savoir-faire meets Swiss precision. Hermès brings its legendary leather craft and design sensibility to horology.' },
  { id: 'apple', name: 'Apple', country: 'United States', founded: 1976, logo: '', description: 'Redefining what a timepiece can be. Apple Watch combines cutting-edge technology with luxury materials and partnerships.' }
];

function getProductsByGender(g) { return PRODUCTS.filter(function(p) { return p.gender && p.gender.indexOf(g) !== -1; }); }
function getProductsByBrand(b) { return PRODUCTS.filter(function(p) { return p.brand === b; }); }
function getProductsByTag(tag) { return PRODUCTS.filter(function(p) { return p.tags && p.tags.indexOf(tag) !== -1; }); }

function formatPrice(amount, currency = 'USD', locale = 'en') {
  const localeMap = { en: 'en-US', ar: 'ar-SA', fa: 'fa-IR' };
  return new Intl.NumberFormat(localeMap[locale] || 'en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
}


// ── I18N ──


var SUPPORTED = ['en', 'ar', 'fa'];
var RTL_LOCALES = ['ar', 'fa'];

var FONTS = {
  en: { display: "'Cormorant Garamond', Georgia, serif", body: "'Inter', system-ui, sans-serif" },
  ar: { display: "'Tajawal', sans-serif",                body: "'Tajawal', sans-serif" },
  fa: { display: "'Vazirmatn', sans-serif",               body: "'Vazirmatn', sans-serif" }
};

var locale = 'en';

function t(key) {
  return translations[locale]?.[key]
    ?? translations['en']?.[key]
    ?? key;
}

function currentLocale() {
  return locale;
}

function setLocale(code) {
  if (!SUPPORTED.includes(code)) return;
  locale = code;
  localStorage.setItem('zifaraa_locale', code);
  _applyLocale(code);
}

function _applyLocale(code) {
  const html = document.documentElement;
  const isRTL = RTL_LOCALES.includes(code);

  html.setAttribute('lang', code);
  html.setAttribute('dir', isRTL ? 'rtl' : 'ltr');

  // Toggle RTL stylesheet
  const rtlLink = document.getElementById('rtl-stylesheet');
  if (rtlLink) rtlLink.disabled = !isRTL;

  // Swap font stack via CSS custom properties
  var fonts = FONTS[code] || FONTS.en;
  html.style.setProperty('--font-display', fonts.display);
  html.style.setProperty('--font-body', fonts.body);

  // Re-render all static [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
  });

  // Update language switcher button states
  document.querySelectorAll('[data-lang]').forEach(btn => {
    const active = btn.dataset.lang === code;
    btn.classList.toggle('lang-btn--active', active);
    btn.setAttribute('aria-pressed', String(active));
  });

  // Notify views to re-render dynamic content
  document.dispatchEvent(new CustomEvent('locale:changed', { detail: { locale: code } }));
}

function initLocale() {
  const saved    = localStorage.getItem('zifaraa_locale');
  const detected = navigator.language?.slice(0, 2);
  const initial  = SUPPORTED.includes(saved)     ? saved
                 : SUPPORTED.includes(detected)  ? detected
                 : 'en';
  locale = initial;
  _applyLocale(initial);
}


// ── STORE ──


// ── Internal state ──
var state = {
  cart:     JSON.parse(localStorage.getItem('zifaraa_cart')     || '[]'),
  wishlist: JSON.parse(localStorage.getItem('zifaraa_wishlist') || '[]'),
  auth:     JSON.parse(localStorage.getItem('zifaraa_auth')     || 'null'),
  order:    JSON.parse(localStorage.getItem('zifaraa_order')    || 'null'),
};

function persist(key) {
  localStorage.setItem(`zifaraa_${key}`, JSON.stringify(state[key]));
  document.dispatchEvent(new CustomEvent(`store:${key}`, { detail: state[key] }));
}

function _animateBadge(type) {
  const badge = document.querySelector(`[data-badge="${type}"]`);
  if (!badge) return;
  badge.classList.remove('badge--pop');
  requestAnimationFrame(() => {
    badge.classList.add('badge--pop');
    badge.addEventListener('animationend', () => badge.classList.remove('badge--pop'), { once: true });
  });
}

function _updateBadge(type) {
  const badge = document.querySelector(`[data-badge="${type}"]`);
  if (!badge) return;
  const count = type === 'cart'     ? cart.getCount()
               : type === 'wishlist' ? state.wishlist.length
               : 0;
  badge.textContent = count;
  badge.setAttribute('aria-label', `${count} items in ${type}`);
  badge.style.display = count > 0 ? '' : 'none';
}

// ── Cart ──
var cart = {
  getItems()     { return [...state.cart]; },
  getCount()     { return state.cart.reduce((s, i) => s + i.qty, 0); },
  getSubtotal()  {
    return state.cart.reduce((sum, item) => {
      const p = getProductById(item.id);
      return sum + (p?.price ?? 0) * item.qty;
    }, 0);
  },

  add(id, qty = 1, variant = null) {
    const existing = state.cart.find(i => i.id === id && i.variant === variant);
    if (existing) {
      existing.qty += qty;
    } else {
      state.cart.push({ id, qty, variant });
    }
    persist('cart');
    _animateBadge('cart');
    _updateBadge('cart');
  },

  remove(id, variant = null) {
    state.cart = state.cart.filter(i => !(i.id === id && i.variant === variant));
    persist('cart');
    _updateBadge('cart');
  },

  updateQty(id, qty, variant = null) {
    if (qty <= 0) { this.remove(id, variant); return; }
    const item = state.cart.find(i => i.id === id && i.variant === variant);
    if (item) { item.qty = qty; persist('cart'); _updateBadge('cart'); }
  },

  clear() {
    state.cart = [];
    persist('cart');
    _updateBadge('cart');
  }
};

// ── Wishlist ──
var wishlist = {
  getItems() { return [...state.wishlist]; },
  has(id)    { return state.wishlist.includes(id); },

  toggle(id) {
    if (this.has(id)) {
      state.wishlist = state.wishlist.filter(i => i !== id);
    } else {
      state.wishlist.push(id);
      _animateBadge('wishlist');
    }
    persist('wishlist');
    _updateBadge('wishlist');
  },

  remove(id) {
    state.wishlist = state.wishlist.filter(i => i !== id);
    persist('wishlist');
    _updateBadge('wishlist');
  }
};

// ── Auth ──
var auth = {
  getUser()    { return state.auth ? { ...state.auth } : null; },
  isLoggedIn() { return !!state.auth; },

  // INTEGRATION HOOK: replace body with real POST /api/auth/login
  async login(email, _password) {
    const user = { id: 'u_' + Date.now(), email, name: email.split('@')[0] };
    state.auth = user;
    persist('auth');
    _updateNavAuth();
    return user;
  },

  // INTEGRATION HOOK: replace body with real POST /api/auth/register
  async register(email, _password, name) {
    const user = { id: 'u_' + Date.now(), email, name: name || email.split('@')[0] };
    state.auth = user;
    persist('auth');
    _updateNavAuth();
    return user;
  },

  logout() {
    state.auth = null;
    persist('auth');
    _updateNavAuth();
  }
};

// ── Order ──
var order = {
  set(data)  { state.order = data; persist('order'); },
  get()      { return state.order ? { ...state.order } : null; },
  clear()    { state.order = null; persist('order'); }
};

// ── Analytics stub ──
function track(event, props = {}) {
  // INTEGRATION HOOK: wire to GA4 / Segment / Mixpanel
  if (window.ZIFARAA_CONFIG?.debug) {
    console.log('[ZIFARAA Track]', event, props);
  }
}

function _updateNavAuth() {
  const btn = document.getElementById('nav-auth-btn');
  if (!btn) return;
  const user = auth.getUser();
  btn.setAttribute('aria-label', user ? `${user.name} — account` : 'Sign in to your account');
}

// ── Init badges on load ──
function initStore() {
  _updateBadge('cart');
  _updateBadge('wishlist');
  _updateNavAuth();
}


// ── ANIMATIONS ──

// ZIFARAA Timepieces — Animations
// Lenis smooth scroll + GSAP ScrollTrigger choreography
// Follows video2website.md skill: 7 distinct animation types, never consecutive repeats

var lenis = null;
var scrollTriggers = [];

function initAnimations() {
  if (window.ZIFARAA_REDUCED_MOTION || _isMobile()) {
    _revealAll();
    return;
  }
  _initLenis();
  _onHomeReady();
}

function pauseAnimations() {
  if (lenis) { lenis.destroy(); lenis = null; }
  scrollTriggers.forEach(st => st.disable());
}

function resumeAnimations() {
  if (!lenis) _initLenis();
  lenis?.start();
  scrollTriggers.forEach(st => st.enable());
}

function destroyScrollAnimations() {
  scrollTriggers.forEach(st => st.kill());
  scrollTriggers = [];
}

// ── 1. Lenis smooth scroll ────────────────────────────────────────────────────
function _isMobile() { return window.innerWidth <= 768; }

function _initLenis() {
  if (typeof Lenis === 'undefined') return;
  if (_isMobile()) return;

  lenis = new Lenis({
    duration: 1.25,
    easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 0.9,
    touchMultiplier: 1.8,
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add(time => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

// ── 2. Homepage animation setup ───────────────────────────────────────────────
function _onHomeReady() {
  // Wait for DOM to be fully rendered by the router
  requestAnimationFrame(() => {
    setTimeout(() => {
      if (!document.getElementById('hero')) return; // not on homepage
      _initHeroAnimation();
      _initCollectionReveal();
      _initProductGrid();
      _initCraftsmanship();
      _initCounters();
      _initAbout();
      _initTestimonials();
      _initContact();
      _initFooter();
      _initHeroParallax();
    }, 100);
  });
}

// ── Re-run when router returns to home ───────────────────────────────────────
function reinitHomeAnimations() {
  if (window.ZIFARAA_REDUCED_MOTION || _isMobile()) return;
  destroyScrollAnimations();
  if (!lenis) _initLenis();
  _onHomeReady();
}

// ── Hero: word-split scale-up with char stagger ───────────────────────────────
function _initHeroAnimation() {
  const chars    = document.querySelectorAll('.hero__char');
  const eyebrow  = document.querySelector('.hero__eyebrow');
  const sub      = document.querySelector('.hero__sub');
  const ctaWrap  = document.querySelector('.hero__cta-wrap');

  if (!chars.length) return;

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.3 });

  gsap.set([eyebrow, sub, ctaWrap], { opacity: 0, y: 30 });
  gsap.set(chars, { opacity: 0, scaleY: 0.4, transformOrigin: 'bottom center' });

  tl.to(chars, {
    opacity: 1,
    scaleY: 1,
    stagger: { each: 0.055, from: 'start' },
    duration: 0.85,
    ease: 'power4.out'
  })
  .to(eyebrow, { opacity: 1, y: 0, duration: 0.7 }, '-=0.3')
  .to(sub,     { opacity: 1, y: 0, duration: 0.7 }, '-=0.5')
  .to(ctaWrap, { opacity: 1, y: 0, duration: 0.7 }, '-=0.5');
}

// ── Hero: background parallax ─────────────────────────────────────────────────
function _initHeroParallax() {
  if (_isMobile()) return;
  const heroBg = document.querySelector('.hero__bg');
  if (!heroBg || typeof ScrollTrigger === 'undefined') return;

  const st = ScrollTrigger.create({
    trigger: '.hero',
    start: 'top top',
    end: 'bottom top',
    scrub: true,
    onUpdate: self => {
      gsap.set(heroBg, { y: self.progress * 120 });
    }
  });
  scrollTriggers.push(st);
}

// ── Collections: slide-left (cards enter from right) ─────────────────────────
function _initCollectionReveal() {
  const cards = document.querySelectorAll('.collection-card');
  if (!cards.length) return;

  gsap.set(cards, { opacity: 0, x: 30 });

  const st = ScrollTrigger.create({
    trigger: '#collections',
    start: 'top 75%',
    once: true,
    onEnter: () => {
      gsap.to(cards, {
        opacity: 1,
        x: 0,
        stagger: 0.14,
        duration: 0.9,
        ease: 'power3.out'
      });
    }
  });

  // Section label + heading
  _revealGroup('#collections .section-label, #collections .section-heading, #collections .section-body', 'fade-up');
  scrollTriggers.push(st);
}

// ── Product grid: stagger-up ──────────────────────────────────────────────────
function _initProductGrid() {
  const cards = document.querySelectorAll('.product-card');
  if (!cards.length) return;

  gsap.set(cards, { opacity: 0, y: 24 });

  const st = ScrollTrigger.create({
    trigger: '#products',
    start: 'top 70%',
    once: true,
    onEnter: () => {
      gsap.to(cards, {
        opacity: 1,
        y: 0,
        stagger: { each: 0.08, from: 'start' },
        duration: 0.8,
        ease: 'power3.out'
      });
    }
  });

  _revealGroup('#products .section-label, #products .section-heading, #products .section-body', 'slide-right');
  scrollTriggers.push(st);
}

// ── Craftsmanship: slide-right (text) + scale-up (image) ─────────────────────
function _initCraftsmanship() {
  const text  = document.querySelector('.craft-text');
  const image = document.querySelector('.craft-image');
  if (!text) return;

  gsap.set(text.querySelectorAll('.section-label, .section-heading, .section-body, .craft-note'), { opacity: 0, x: -24 });
  if (image) gsap.set(image, { opacity: 0, scale: 0.9 });

  const st = ScrollTrigger.create({
    trigger: '#craftsmanship',
    start: 'top 65%',
    once: true,
    onEnter: () => {
      gsap.to(text.querySelectorAll('.section-label, .section-heading, .section-body, .craft-note'), {
        opacity: 1,
        x: 0,
        stagger: 0.14,
        duration: 0.9,
        ease: 'power3.out'
      });
      if (image) {
        gsap.to(image, {
          opacity: 1,
          scale: 1,
          duration: 1.1,
          ease: 'power2.out',
          delay: 0.2
        });
      }
    }
  });
  scrollTriggers.push(st);
}

// ── Counters: count up from 0 ─────────────────────────────────────────────────
function _initCounters() {
  document.querySelectorAll('.stat-number[data-stat-value]').forEach(el => {
    const target = parseFloat(el.getAttribute('data-stat-value'));
    if (isNaN(target)) return;

    gsap.from(el, {
      textContent: 0,
      duration: 2,
      ease: 'power1.out',
      snap: { textContent: target < 100 ? 1 : 10 },
      scrollTrigger: {
        trigger: el.closest('.stat-item') || el,
        start: 'top 80%',
        once: true,
      },
      onUpdate() {
        el.textContent = Math.round(parseFloat(el.textContent)).toLocaleString();
      }
    });
  });
}

// ── About: clip-reveal heading + fade-up body ─────────────────────────────────
function _initAbout() {
  const heading  = document.querySelector('#about .section-heading');
  const bodyEls  = document.querySelectorAll('#about .about-text p');
  const image    = document.querySelector('#about .about-image');
  const label    = document.querySelector('#about .section-label');
  const cta      = document.querySelector('#about .btn');

  if (!heading) return;

  if (image) gsap.set(image, { opacity: 0, scale: 0.92 });
  gsap.set(heading, { clipPath: 'inset(100% 0 0 0)' });
  gsap.set([label, ...bodyEls, cta].filter(Boolean), { opacity: 0, y: 28 });

  const st = ScrollTrigger.create({
    trigger: '#about',
    start: 'top 65%',
    once: true,
    onEnter: () => {
      const tl = gsap.timeline({ ease: 'power3.out' });
      if (image) tl.to(image, { opacity: 1, scale: 1, duration: 1.1, ease: 'power2.out' }, 0);
      tl.to(label, { opacity: 1, y: 0, duration: 0.7 }, 0.1)
        .to(heading, { clipPath: 'inset(0% 0 0 0)', duration: 1.2, ease: 'power4.inOut' }, 0.2)
        .to(bodyEls, { opacity: 1, y: 0, stagger: 0.15, duration: 0.8 }, 0.4)
        .to(cta,     { opacity: 1, y: 0, duration: 0.7 }, '-=0.3');
    }
  });
  scrollTriggers.push(st);
}

// ── Testimonials: fade-up with star reveal ────────────────────────────────────
function _initTestimonials() {
  const cards = document.querySelectorAll('.testimonial-card');
  if (!cards.length) return;

  gsap.set(cards, { opacity: 0, y: 24 });

  const st = ScrollTrigger.create({
    trigger: '#testimonials',
    start: 'top 70%',
    once: true,
    onEnter: () => {
      gsap.to(cards, {
        opacity: 1,
        y: 0,
        stagger: 0.18,
        duration: 0.85,
        ease: 'power3.out',
        onComplete() {
          document.querySelectorAll('.star').forEach((star, i) => {
            setTimeout(() => star.classList.add('revealed'), i * 40);
          });
        }
      });
    }
  });

  _revealGroup('#testimonials .section-label, #testimonials .section-heading', 'rotate-in');
  scrollTriggers.push(st);
}

// ── Contact: rotate-in ────────────────────────────────────────────────────────
function _initContact() {
  const formEls = document.querySelectorAll('.contact-form .form-group, .contact-form .btn');
  if (!formEls.length) return;

  gsap.set(formEls, { opacity: 0, y: 20 });

  const st = ScrollTrigger.create({
    trigger: '#contact',
    start: 'top 70%',
    once: true,
    onEnter: () => {
      gsap.to(formEls, {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.85,
        ease: 'power3.out'
      });
    }
  });

  _revealGroup('#contact .section-label, #contact .section-heading, #contact .section-body', 'fade-up');
  scrollTriggers.push(st);
}

// ── Footer: fade-up ────────────────────────────────────────────────────────────
function _initFooter() {
  const footerEls = document.querySelectorAll('.footer-brand, .footer-col');
  if (!footerEls.length) return;

  gsap.set(footerEls, { opacity: 0, y: 20 });

  const st = ScrollTrigger.create({
    trigger: '.site-footer',
    start: 'top 85%',
    once: true,
    onEnter: () => {
      gsap.to(footerEls, {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.75,
        ease: 'power2.out'
      });
    }
  });
  scrollTriggers.push(st);
}

// ── Helper: generic reveal group ──────────────────────────────────────────────
function _revealGroup(selector, type) {
  const els = document.querySelectorAll(selector);
  if (!els.length) return;

  const props = {
    'fade-up':    { opacity: 0, y: 24 },
    'slide-left': { opacity: 0, x: -24 },
    'slide-right':{ opacity: 0, x: 24 },
    'rotate-in':  { opacity: 0, y: 20 },
  }[type] || { opacity: 0, y: 24 };

  gsap.set(els, props);

  const st = ScrollTrigger.create({
    trigger: els[0],
    start: 'top 80%',
    once: true,
    onEnter: () => {
      gsap.to(els, {
        opacity: 1,
        y: 0,
        x: 0,
        rotation: 0,
        stagger: 0.12,
        duration: 0.85,
        ease: 'power3.out'
      });
    }
  });
  scrollTriggers.push(st);
}

// ── No-JS / reduced motion fallback ──────────────────────────────────────────
function _revealAll() {
  document.querySelectorAll(
    '.reveal-fade-up, .reveal-slide-left, .reveal-slide-right, ' +
    '.reveal-scale-up, .reveal-stagger-up, .reveal-rotate-in, .reveal-clip'
  ).forEach(el => {
    el.style.opacity  = '1';
    el.style.transform= 'none';
    el.style.clipPath = 'none';
  });
  document.querySelectorAll('.star').forEach(s => s.classList.add('revealed'));
}


// ── MODAL ──


var activeProduct = null;
var currentImageIndex = 0;

function openProductModal(productId) {
  const product = getProductById(productId);
  if (!product) return;
  activeProduct = product;
  currentImageIndex = 0;

  const modal   = document.getElementById('product-modal');
  const content = document.getElementById('modal-content');

  content.innerHTML = _renderModal(product);
  modal.removeAttribute('aria-hidden');
  modal.classList.add('modal--open');
  document.body.style.overflow = 'hidden';

  // Focus management
  const firstFocusable = modal.querySelector('button, [href], input, select, textarea');
  firstFocusable?.focus();

  _wireModal(product);
  track('product_modal_open', { id: productId });
}

function closeProductModal() {
  const modal = document.getElementById('product-modal');
  modal.setAttribute('aria-hidden', 'true');
  modal.classList.remove('modal--open');
  document.body.style.overflow = '';
  activeProduct = null;
}

function _renderModal(p) {
  const inWish = wishlist.has(p.id);
  const price  = formatPrice(p.price, p.currency, currentLocale());
  const col    = COLLECTIONS.find(c => c.id === p.collection);

  const specRows = [
    ['modal.movement',  p.specs.movement],
    ['modal.diameter',  p.specs.caseDiameter],
    ['modal.thickness', p.specs.caseThickness],
    ['modal.crystal',   p.specs.crystal],
    ['modal.water',     p.specs.waterResistance],
    ['modal.power',     p.specs.powerReserve],
    ['modal.case',      p.specs.caseMaterial],
    ['modal.strap',     p.specs.strapMaterial],
  ];

  return `
    <div class="modal__gallery">
      <div class="modal__gallery-main">
        <img id="modal-img-main"
             src="${p.images[0]}"
             alt="${p.name} — primary view"
             width="600" height="800">
      </div>
      <div class="modal__gallery-thumbs" role="list">
        ${p.images.map((img, i) => `
          <button class="modal__thumb${i === 0 ? ' modal__thumb--active' : ''}"
                  data-img-index="${i}"
                  aria-label="View image ${i + 1}"
                  role="listitem">
            <img src="${img}" alt="" width="80" height="107" loading="lazy">
          </button>
        `).join('')}
      </div>
    </div>

    <div class="modal__info">
      <div class="modal__meta">
        <span class="modal__collection">${col?.name || ''}</span>
        ${p.badge ? `<span class="product-card__badge">${p.badge}</span>` : ''}
      </div>
      <h2 class="modal__name">${p.name}</h2>
      <p class="modal__price">${price}</p>
      <p class="modal__desc">${p.description}</p>

      <div class="modal__stock ${p.inStock ? 'modal__stock--in' : 'modal__stock--out'}">
        <span class="modal__stock-dot" aria-hidden="true"></span>
        <span data-i18n="${p.inStock ? 'modal.in_stock' : 'modal.notify'}">
          ${t(p.inStock ? 'modal.in_stock' : 'modal.notify')}
        </span>
      </div>

      <div class="modal__actions">
        <button class="btn btn--gold btn--full modal__add-cart${!p.inStock ? ' btn--disabled' : ''}"
                data-cart-id="${p.id}"
                ${!p.inStock ? 'aria-disabled="true"' : ''}>
          ${t(p.inStock ? 'modal.add_cart' : 'modal.notify')}
        </button>
        <button class="btn btn--outline modal__add-wish${inWish ? ' is-wished' : ''}"
                data-wish-id="${p.id}"
                aria-pressed="${inWish}">
          ${t(inWish ? 'modal.remove_wish' : 'modal.add_wish')}
        </button>
      </div>

      <details class="modal__specs" open>
        <summary class="modal__specs-toggle">Specifications</summary>
        <dl class="modal__specs-list">
          ${specRows.map(([key, val]) => `
            <div class="modal__spec-row">
              <dt class="modal__spec-key" data-i18n="${key}">${t(key)}</dt>
              <dd class="modal__spec-val">${val}</dd>
            </div>
          `).join('')}
        </dl>
      </details>
    </div>
  `;
}

function _wireModal(product) {
  const modal = document.getElementById('product-modal');

  // Close button
  document.getElementById('modal-close')?.addEventListener('click', closeProductModal);

  // Backdrop click
  document.getElementById('modal-backdrop')?.addEventListener('click', closeProductModal);

  // Keyboard close
  const onKey = e => {
    if (e.key === 'Escape') { closeProductModal(); document.removeEventListener('keydown', onKey); }
  };
  document.addEventListener('keydown', onKey);

  // Thumbnail switching
  modal.querySelectorAll('.modal__thumb').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.imgIndex, 10);
      currentImageIndex = idx;
      const mainImg = document.getElementById('modal-img-main');
      if (mainImg) {
        mainImg.src = product.images[idx];
        mainImg.alt = `${product.name} — view ${idx + 1}`;
      }
      modal.querySelectorAll('.modal__thumb').forEach(b => b.classList.remove('modal__thumb--active'));
      btn.classList.add('modal__thumb--active');
    });
  });

  // Add to cart
  modal.querySelector('.modal__add-cart')?.addEventListener('click', btn => {
    if (btn.target.getAttribute('aria-disabled') === 'true') return;
    cart.add(product.id);
    showToast(t('products.added'), 'success');
    track('cart_add', { id: product.id, source: 'modal' });
  });

  // Wishlist
  modal.querySelector('.modal__add-wish')?.addEventListener('click', btn => {
    const id = btn.target.dataset.wishId || btn.target.closest('[data-wish-id]')?.dataset.wishId || product.id;
    wishlist.toggle(id);
    const isWished = wishlist.has(id);
    const wishBtn = modal.querySelector('.modal__add-wish');
    wishBtn.classList.toggle('is-wished', isWished);
    wishBtn.setAttribute('aria-pressed', String(isWished));
    wishBtn.textContent = t(isWished ? 'modal.remove_wish' : 'modal.add_wish');
    // Sync product grid card
    const gridWishBtn = document.querySelector(`.product-card__wish[data-wish-id="${id}"]`);
    if (gridWishBtn) {
      gridWishBtn.classList.toggle('is-wished', isWished);
      gridWishBtn.querySelector('svg')?.setAttribute('fill', isWished ? 'currentColor' : 'none');
    }
    track('wishlist_toggle', { id, action: isWished ? 'add' : 'remove' });
  });
}


// ── VIEW: HOME ──


function renderHome(app) {
  _setSEO({
    title: 'ZIFARAA — Luxury Watch Marketplace | Rolex, Patek Philippe, Cartier, Omega',
    description: 'ZIFARAA is the premier luxury watch marketplace. Shop authenticated Rolex, Patek Philippe, Cartier, Omega, Vacheron Constantin, Hermès, and Apple Watch with white-glove delivery worldwide.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'name': 'ZIFARAA',
      'url': window.location.origin,
      'description': 'Premium luxury watch marketplace',
      'potentialAction': { '@type': 'SearchAction', 'target': window.location.origin + '/#/brands/{search_term}', 'query-input': 'required name=search_term' }
    }
  });

  app.innerHTML = '';
  app.className = 'page-enter';

  app.appendChild(_hero());
  app.appendChild(_collections());
  app.appendChild(_products());
  app.appendChild(_craftsmanship());
  app.appendChild(_about());
  app.appendChild(_testimonials());
  app.appendChild(_contact());
  app.appendChild(_footer());

  _wireHome();
}

// ── 1. Hero ──────────────────────────────────────────────────────────────────
function _hero() {
  const sec = document.createElement('section');
  sec.className = 'hero';
  sec.id = 'hero';
  sec.setAttribute('aria-label', 'ZIFARAA Timepieces hero');

  sec.innerHTML = `
    <div class="hero__bg" aria-hidden="true"></div>
    <div class="container hero__content">
      <span class="hero__eyebrow reveal-fade-up" data-i18n="hero.eyebrow">${t('hero.eyebrow')}</span>
      <h1 class="hero__heading" aria-label="ZIFARAA">
        <span class="hero__word" aria-hidden="true">
          ${[...'ZIFA'].map(c => `<span class="hero__char">${c}</span>`).join('')}
        </span>
        <span class="hero__word hero__word--indent" aria-hidden="true">
          ${[...'RAA'].map(c => `<span class="hero__char">${c}</span>`).join('')}
        </span>
      </h1>
      <p class="hero__sub reveal-fade-up" data-i18n="hero.sub">${t('hero.sub')}</p>
      <div class="hero__cta-wrap reveal-fade-up">
        <a href="#collections" class="btn btn--primary" data-section-link="collections" data-i18n="hero.cta">${t('hero.cta')}</a>
        <span class="hero__scroll" aria-hidden="true">
          <span class="hero__scroll-line"></span>
          <span data-i18n="hero.scroll">${t('hero.scroll')}</span>
        </span>
      </div>
    </div>
  `;
  return sec;
}

// ── 2. Collections ────────────────────────────────────────────────────────────
function _collections() {
  const sec = document.createElement('section');
  sec.className = 'section';
  sec.id = 'collections';

  sec.innerHTML = `
    <div class="container">
      <span class="section-label reveal-fade-up" data-i18n="collections.label">${t('collections.label')}</span>
      <h2 class="section-heading reveal-slide-left" data-i18n="collections.heading">${t('collections.heading')}</h2>
      <p class="section-body reveal-slide-left" data-i18n="collections.body">${t('collections.body')}</p>
      <div class="collections-grid">
        ${COLLECTIONS.map((col, i) => `
          <article class="collection-card reveal-slide-left" data-collection="${col.id}" style="--delay:${i * 0.12}s" tabindex="0" role="button" aria-label="${col.name} collection">
            <img class="collection-card__img"
                 src="${col.cover}"
                 alt="${col.name} collection — ${col.tagline}"
                 loading="${i < 2 ? 'eager' : 'lazy'}"
                 width="800" height="1067">
            <div class="collection-card__overlay" aria-hidden="true"></div>
            <div class="collection-card__body">
              <h3 class="collection-card__name">${col.name}</h3>
              <p class="collection-card__tagline">${col.tagline}</p>
              <span class="btn btn--ghost btn--sm" data-i18n="collections.explore">${t('collections.explore')}</span>
            </div>
          </article>
        `).join('')}
      </div>
    </div>
  `;
  return sec;
}

// ── 3. Product Showcase ───────────────────────────────────────────────────────
function _products() {
  const sec = document.createElement('section');
  sec.className = 'section section--dark';
  sec.id = 'products';

  const filterBtns = ['all', ...COLLECTIONS.map(c => c.id)];

  sec.innerHTML = `
    <div class="container">
      <span class="section-label reveal-fade-up" data-i18n="products.label">${t('products.label')}</span>
      <h2 class="section-heading reveal-slide-right" data-i18n="products.heading">${t('products.heading')}</h2>
      <p class="section-body reveal-slide-right" data-i18n="products.body">${t('products.body')}</p>

      <div class="products-filter" role="group" aria-label="Filter by collection">
        ${filterBtns.map((id, i) => {
          const label = i === 0 ? t('products.filter.all')
            : COLLECTIONS.find(c => c.id === id)?.name || id;
          return `<button class="btn btn--filter${i === 0 ? ' btn--filter-active' : ''}"
                          data-filter="${id}"
                          aria-pressed="${i === 0}">${label}</button>`;
        }).join('')}
      </div>

      <div class="products-grid" id="products-grid">
        ${PRODUCTS.map((p, i) => _productCard(p, i)).join('')}
      </div>
    </div>
  `;
  return sec;
}

function _productCard(p, i = 0) {
  const inWish = wishlist.has(p.id);
  const price  = formatPrice(p.price, p.currency, currentLocale());
  return `
    <article class="product-card reveal-stagger-up"
             data-product-id="${p.id}"
             data-collection="${p.collection}"
             data-brand="${p.brand || ''}"
             style="--delay:${(i % 3) * 0.1}s">
      <div class="product-card__img-wrap">
        <img class="product-card__img"
             src="${p.images[0]}"
             alt="${p.name}"
             loading="lazy"
             width="400" height="533">
        ${p.badge ? `<span class="product-card__badge">${p.badge}</span>` : ''}
        <button class="product-card__wish${inWish ? ' is-wished' : ''}"
                data-wish-id="${p.id}"
                aria-label="${inWish ? t('modal.remove_wish') : t('modal.add_wish')}: ${p.name}"
                aria-pressed="${inWish}">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="${inWish ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>
      <div class="product-card__body">
        <div class="product-card__meta">
          <span class="product-card__collection">${COLLECTIONS.find(c => c.id === p.collection)?.name || ''}</span>
          <span class="product-card__price">${price}</span>
        </div>
        <h3 class="product-card__name">${p.name}</h3>
        <p class="product-card__desc">${p.description.slice(0, 90)}…</p>
        <div class="product-card__actions">
          <button class="btn btn--primary btn--sm product-card__details" data-product-id="${p.id}" data-i18n-aria="products.view" aria-label="${t('products.view')}: ${p.name}">
            ${t('products.view')}
          </button>
          <button class="btn btn--gold btn--sm product-card__cart${!p.inStock ? ' btn--disabled' : ''}"
                  data-cart-id="${p.id}"
                  ${!p.inStock ? 'aria-disabled="true"' : ''}
                  aria-label="${p.inStock ? t('products.add_cart') : t('products.notify')}: ${p.name}">
            ${p.inStock ? t('products.add_cart') : t('products.notify')}
          </button>
        </div>
      </div>
    </article>
  `;
}

// ── 5. Craftsmanship ──────────────────────────────────────────────────────────
function _craftsmanship() {
  const sec = document.createElement('section');
  sec.className = 'section';
  sec.id = 'craftsmanship';

  const stats = [
    { key: 'craft.stat1', val: 'craft.stat1.value', label: 'craft.stat1.label' },
    { key: 'craft.stat2', val: 'craft.stat2.value', label: 'craft.stat2.label' },
    { key: 'craft.stat3', val: 'craft.stat3.value', label: 'craft.stat3.label' },
    { key: 'craft.stat4', val: 'craft.stat4.value', label: 'craft.stat4.label' },
  ];

  sec.innerHTML = `
    <div class="container">
      <div class="craft-split">
        <div class="craft-text">
          <span class="section-label reveal-fade-up" data-i18n="craft.label">${t('craft.label')}</span>
          <h2 class="section-heading reveal-slide-right" data-i18n="craft.heading">${t('craft.heading')}</h2>
          <p class="section-body reveal-slide-right" data-i18n="craft.body">${t('craft.body')}</p>
          <p class="craft-note reveal-slide-right" data-i18n="craft.note">${t('craft.note')}</p>
          <div class="craft-stats">
            ${stats.map(s => `
              <div class="stat-item reveal-stagger-up">
                <span class="stat-number" data-stat-value="${t(s.val).replace(/[^\d.]/g, '')}" data-i18n="${s.val}">0</span>
                <span class="stat-label" data-i18n="${s.label}">${t(s.label)}</span>
              </div>
            `).join('')}
          </div>
        </div>
        <div class="craft-image reveal-scale-up">
          <img src="https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=800&q=80&fm=webp"
               alt="Master watchmaker at work"
               loading="lazy"
               width="800" height="1067">
        </div>
      </div>
    </div>
  `;
  return sec;
}

// ── 5. About ─────────────────────────────────────────────────────────────────
function _about() {
  const sec = document.createElement('section');
  sec.className = 'section section--dark';
  sec.id = 'about';

  sec.innerHTML = `
    <div class="container">
      <div class="about-inner">
        <div class="about-image reveal-scale-up">
          <img src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80&fm=webp"
               alt="ZIFARAA — a curated collection of luxury timepieces"
               loading="lazy"
               width="800" height="1067">
        </div>
        <div class="about-text">
          <span class="section-label reveal-fade-up" data-i18n="about.label">${t('about.label')}</span>
          <h2 class="section-heading reveal-clip" data-i18n="about.heading">${t('about.heading')}</h2>
          <p class="reveal-fade-up" data-i18n="about.body1">${t('about.body1')}</p>
          <p class="reveal-fade-up" data-i18n="about.body2">${t('about.body2')}</p>
          <p class="reveal-fade-up" data-i18n="about.body3">${t('about.body3')}</p>
          <a href="#contact" class="btn btn--primary reveal-fade-up" data-section-link="contact" data-i18n="about.cta">${t('about.cta')}</a>
        </div>
      </div>
    </div>
  `;
  return sec;
}

// ── 7. Testimonials ──────────────────────────────────────────────────────────
var TESTIMONIALS = [
  {
    quote: "I sourced my Rolex Submariner through ZIFARAA and the experience was faultless — authentication, packaging, and delivery were all handled with exceptional care.",
    author: 'James H.',
    location: 'London',
    watch: 'Rolex Submariner Date',
    rating: 5
  },
  {
    quote: "Finding a Patek Philippe Annual Calendar at a fair price felt impossible until I discovered ZIFARAA. Arrived exactly as described, with full documentation.",
    author: 'Marco V.',
    location: 'Milan',
    watch: 'Patek Philippe Annual Calendar',
    rating: 5
  },
  {
    quote: "As a collector of fifteen years I am difficult to impress. ZIFARAA impressed me — both with the Vacheron Constantin Overseas and with their white-glove service.",
    author: 'Priya S.',
    location: 'Singapore',
    watch: 'Vacheron Constantin Overseas',
    rating: 5
  }
];

function _testimonials() {
  const sec = document.createElement('section');
  sec.className = 'section';
  sec.id = 'testimonials';

  sec.innerHTML = `
    <div class="container">
      <span class="section-label reveal-fade-up" data-i18n="testimonials.label">${t('testimonials.label')}</span>
      <h2 class="section-heading reveal-rotate-in" data-i18n="testimonials.heading">${t('testimonials.heading')}</h2>
      <div class="testimonials-grid">
        ${TESTIMONIALS.map((item, i) => `
          <blockquote class="testimonial-card reveal-fade-up" style="--delay:${i * 0.15}s">
            <div class="testimonial-stars" aria-label="${item.rating} out of 5 stars">
              ${'★'.repeat(item.rating).split('').map(s =>
                `<span class="star" aria-hidden="true">${s}</span>`
              ).join('')}
            </div>
            <p class="testimonial-quote">"${item.quote}"</p>
            <footer class="testimonial-footer">
              <cite class="testimonial-author">${item.author}</cite>
              <span class="testimonial-meta">${item.location} — ${item.watch}</span>
            </footer>
          </blockquote>
        `).join('')}
      </div>
    </div>
  `;
  return sec;
}

// ── 8. Contact ───────────────────────────────────────────────────────────────
function _contact() {
  const sec = document.createElement('section');
  sec.className = 'section section--dark';
  sec.id = 'contact';

  sec.innerHTML = `
    <div class="container">
      <div class="contact-inner">
        <div class="contact-text">
          <span class="section-label reveal-fade-up" data-i18n="contact.label">${t('contact.label')}</span>
          <h2 class="section-heading reveal-rotate-in" data-i18n="contact.heading">${t('contact.heading')}</h2>
          <p class="section-body reveal-fade-up" data-i18n="contact.body">${t('contact.body')}</p>
        </div>
        <form class="contact-form reveal-slide-left" id="contact-form" novalidate>
          <div class="form-group">
            <label class="form-label" for="contact-name" data-i18n="contact.name">${t('contact.name')}</label>
            <input class="form-input" type="text" id="contact-name" name="name"
                   autocomplete="name" required
                   data-i18n-placeholder="contact.name">
            <span class="form-error" id="contact-name-err" role="alert"></span>
          </div>
          <div class="form-group">
            <label class="form-label" for="contact-email" data-i18n="contact.email">${t('contact.email')}</label>
            <input class="form-input" type="email" id="contact-email" name="email"
                   autocomplete="email" required
                   data-i18n-placeholder="contact.email">
            <span class="form-error" id="contact-email-err" role="alert"></span>
          </div>
          <div class="form-group">
            <label class="form-label" for="contact-phone" data-i18n="contact.phone">${t('contact.phone')}</label>
            <input class="form-input" type="tel" id="contact-phone" name="phone"
                   autocomplete="tel"
                   data-i18n-placeholder="contact.phone">
          </div>
          <div class="form-group">
            <label class="form-label" for="contact-msg" data-i18n="contact.message">${t('contact.message')}</label>
            <textarea class="form-input form-textarea" id="contact-msg" name="message"
                      rows="4" required
                      data-i18n-placeholder="contact.message"></textarea>
            <span class="form-error" id="contact-msg-err" role="alert"></span>
          </div>
          <button type="submit" class="btn btn--gold btn--full">
            <span data-i18n="contact.submit">${t('contact.submit')}</span>
          </button>
          <div class="form-success" id="contact-success" hidden
               data-i18n="contact.success">${t('contact.success')}</div>
        </form>
      </div>
    </div>
  `;
  return sec;
}

// ── 9. Footer ────────────────────────────────────────────────────────────────
function _footer() {
  const el = document.createElement('footer');
  el.className = 'site-footer';
  el.setAttribute('role', 'contentinfo');

  el.innerHTML = `
    <div class="container">
      <div class="footer-inner">
        <!-- Brand column -->
        <div class="footer-brand">
          <a href="#/" class="footer-logo" aria-label="ZIFARAA Timepieces home">
            <span class="footer-logo__name">ZIFARAA</span>
            <span class="footer-logo__sub">TIMEPIECES</span>
          </a>
          <p class="footer-tagline" data-i18n="footer.tagline">${t('footer.tagline')}</p>
          <address class="footer-address not-italic">
            <p data-i18n="footer.address">${t('footer.address')}</p>
            <a href="mailto:hello@zifaraa.com" data-i18n="footer.email">${t('footer.email')}</a>
            <a href="tel:+41220000000" data-i18n="footer.phone">${t('footer.phone')}</a>
          </address>
          <div class="footer-social" aria-label="Social media">
            <a href="#" class="footer-social__link" aria-label="${t('footer.social.ig')}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" class="footer-social__link" aria-label="${t('footer.social.x')}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" class="footer-social__link" aria-label="${t('footer.social.yt')}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
            </a>
          </div>
        </div>

        <!-- Shop column -->
        <div class="footer-col">
          <h3 class="footer-col__heading">Shop</h3>
          <ul class="footer-col__list">
            <li><a href="#/mens" class="footer-col__link">${t('nav.mens')}</a></li>
            <li><a href="#/womens" class="footer-col__link">${t('nav.womens')}</a></li>
            <li><a href="#/boys" class="footer-col__link">${t('nav.boys')}</a></li>
            <li><a href="#/girls" class="footer-col__link">${t('nav.girls')}</a></li>
            <li><a href="#/apple-watch" class="footer-col__link">${t('nav.apple')}</a></li>
          </ul>
        </div>

        <!-- Discover column -->
        <div class="footer-col">
          <h3 class="footer-col__heading">Discover</h3>
          <ul class="footer-col__list">
            <li><a href="#/brands" class="footer-col__link">${t('nav.brands')}</a></li>
            <li><a href="#/new-arrivals" class="footer-col__link">${t('nav.new')}</a></li>
            <li><a href="#/limited-editions" class="footer-col__link">${t('nav.limited')}</a></li>
            <li><a href="#/services" class="footer-col__link">${t('nav.services')}</a></li>
          </ul>
        </div>

        <!-- Company column -->
        <div class="footer-col">
          <h3 class="footer-col__heading">${t('footer.about')}</h3>
          <ul class="footer-col__list">
            <li><a href="#/about" class="footer-col__link">${t('nav.about')}</a></li>
            <li><a href="#/contact" class="footer-col__link">${t('nav.contact')}</a></li>
            <li><a href="#/services" class="footer-col__link" data-i18n="footer.care">${t('footer.care')}</a></li>
            <li><a href="#" class="footer-col__link" data-i18n="footer.privacy">${t('footer.privacy')}</a></li>
            <li><a href="#" class="footer-col__link" data-i18n="footer.terms">${t('footer.terms')}</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="footer-copy" data-i18n="footer.copyright">${t('footer.copyright')}</p>
        <div class="footer-bottom__langs" aria-label="Language selection">
          <button class="lang-btn" data-lang="en">EN</button>
          <button class="lang-btn" data-lang="ar">AR</button>
          <button class="lang-btn" data-lang="fa">FA</button>
        </div>
      </div>
    </div>
  `;
  return el;
}

// ── Wire home interactions ────────────────────────────────────────────────────
function _wireHome() {
  // Collection card clicks — filter products
  document.querySelectorAll('.collection-card[data-collection]').forEach(card => {
    card.addEventListener('click', () => {
      const col = card.dataset.collection;
      _filterProducts(col);
      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
    });
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.click(); }
    });
  });

  // Product filter buttons
  document.querySelectorAll('[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-filter]').forEach(b => {
        b.classList.remove('btn--filter-active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('btn--filter-active');
      btn.setAttribute('aria-pressed', 'true');
      _filterProducts(btn.dataset.filter);
    });
  });

  // Product detail buttons
  document.querySelectorAll('.product-card__details').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.productId;
      openProductModal(id);
      track('product_viewed', { id });
    });
  });

  // Add to cart buttons
  document.querySelectorAll('.product-card__cart').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.getAttribute('aria-disabled') === 'true') return;
      const id = btn.dataset.cartId;
      cart.add(id);
      showToast(t('products.added'), 'success');
      track('cart_add', { id });
    });
  });

  // Wishlist toggle buttons
  document.querySelectorAll('.product-card__wish').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.wishId;
      wishlist.toggle(id);
      const isWished = wishlist.has(id);
      btn.setAttribute('aria-pressed', String(isWished));
      btn.classList.toggle('is-wished', isWished);
      btn.querySelector('svg').setAttribute('fill', isWished ? 'currentColor' : 'none');
      track('wishlist_toggle', { id, action: isWished ? 'add' : 'remove' });
    });
  });

  // Section smooth scroll links
  document.querySelectorAll('[data-section-link]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      const target = document.getElementById(el.dataset.sectionLink);
      target?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Contact form
  const form = document.getElementById('contact-form');
  form?.addEventListener('submit', e => {
    e.preventDefault();
    if (!_validateContactForm(form)) return;
    const btn = form.querySelector('[type="submit"]');
    btn.disabled = true;
    btn.querySelector('span').textContent = t('misc.loading');
    // INTEGRATION HOOK: replace with real API call
    setTimeout(() => {
      form.reset();
      btn.disabled = false;
      btn.querySelector('span').setAttribute('data-i18n', 'contact.submit');
      btn.querySelector('span').textContent = t('contact.submit');
      document.getElementById('contact-success').hidden = false;
    }, 1200);
  });

  // Validate on blur
  form?.querySelectorAll('[required]').forEach(field => {
    field.addEventListener('blur', () => _validateField(field));
  });
}

function _filterProducts(collection) {
  const grid = document.getElementById('products-grid');
  if (!grid) return;
  const cards = grid.querySelectorAll('.product-card');
  cards.forEach(card => {
    const show = collection === 'all' || card.dataset.collection === collection;
    card.style.display = show ? '' : 'none';
  });
}

function _validateField(field) {
  const errId = `${field.id}-err`;
  const errEl = document.getElementById(errId);
  if (!errEl) return true;

  if (field.type === 'email' && field.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
    errEl.textContent = t('error.email');
    field.setAttribute('aria-invalid', 'true');
    field.setAttribute('aria-describedby', errId);
    return false;
  }
  if (field.required && !field.value.trim()) {
    errEl.textContent = t('error.required');
    field.setAttribute('aria-invalid', 'true');
    field.setAttribute('aria-describedby', errId);
    return false;
  }
  errEl.textContent = '';
  field.setAttribute('aria-invalid', 'false');
  field.removeAttribute('aria-describedby');
  return true;
}

function _validateContactForm(form) {
  let valid = true;
  form.querySelectorAll('[required]').forEach(field => {
    if (!_validateField(field)) valid = false;
  });
  return valid;
}

// ── Toast utility ─────────────────────────────────────────────────────────────
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  toast.setAttribute('role', 'status');
  toast.textContent = message;
  container.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('toast--visible'));
  setTimeout(() => {
    toast.classList.remove('toast--visible');
    toast.addEventListener('transitionend', () => toast.remove(), { once: true });
  }, 3500);
}


// ── SEO ──

function _setSEO(meta) {
  document.title = meta.title || 'ZIFARAA — Luxury Watch Marketplace';
  var desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute('content', meta.description || '');
  var tags = {
    'og:title': meta.title,
    'og:description': meta.description,
    'og:type': meta.type || 'website',
    'og:url': window.location.href,
    'og:image': meta.image || 'https://images.unsplash.com/photo-1622434641406-a158123450f9?w=1200&q=80&fm=webp'
  };
  Object.keys(tags).forEach(function(prop) {
    var el = document.querySelector('meta[property="' + prop + '"]');
    if (el) el.setAttribute('content', tags[prop] || '');
  });
  var tw = { 'twitter:title': meta.title, 'twitter:description': meta.description, 'twitter:image': tags['og:image'] };
  Object.keys(tw).forEach(function(name) {
    var el = document.querySelector('meta[name="' + name + '"]');
    if (el) el.setAttribute('content', tw[name] || '');
  });
  var canon = document.querySelector('link[rel="canonical"]');
  if (canon) canon.setAttribute('href', window.location.href);
  var existing = document.querySelector('script[type="application/ld+json"]');
  if (existing) existing.remove();
  if (meta.schema) {
    var s = document.createElement('script');
    s.type = 'application/ld+json';
    s.textContent = JSON.stringify(meta.schema);
    document.head.appendChild(s);
  }
}

function _breadcrumbs(items) {
  return '<nav class="breadcrumbs" aria-label="Breadcrumb"><ol class="breadcrumbs__list" itemscope itemtype="https://schema.org/BreadcrumbList">' +
    items.map(function(item, i) {
      var isLast = i === items.length - 1;
      return '<li class="breadcrumbs__item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">' +
        (isLast
          ? '<span itemprop="name" aria-current="page">' + item.label + '</span>'
          : '<a href="' + item.href + '" itemprop="item"><span itemprop="name">' + item.label + '</span></a>') +
        '<meta itemprop="position" content="' + (i + 1) + '">' +
        (isLast ? '' : '<span class="breadcrumbs__sep" aria-hidden="true">/</span>') +
        '</li>';
    }).join('') +
    '</ol></nav>';
}

function _pageHero(title, desc, extraClass) {
  return '<section class="page-hero' + (extraClass ? ' ' + extraClass : '') + '">' +
    '<div class="container">' +
    '<h1 class="page-hero__title">' + title + '</h1>' +
    '<p class="page-hero__desc">' + desc + '</p>' +
    '</div></section>';
}

function _productGrid(products, emptyMsg) {
  if (!products.length) {
    return '<div class="empty-state"><p class="empty-state__body">' + (emptyMsg || t('page.no_products')) + '</p>' +
      '<a href="#/" class="btn btn--primary">' + t('page.back_home') + '</a></div>';
  }
  return '<div class="products-grid" id="products-grid">' +
    products.map(function(p, i) { return _productCard(p, i); }).join('') +
    '</div>';
}

function _pageFooterBlock() {
  return _footer().outerHTML;
}


// ── SHARED: Category Page Renderer ──

function _renderCategoryPage(app, config) {
  _setSEO({
    title: config.seoTitle || config.title + ' — ZIFARAA',
    description: config.seoDesc || config.desc,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      'name': config.title,
      'description': config.desc,
      'url': window.location.href,
      'isPartOf': { '@type': 'WebSite', 'name': 'ZIFARAA', 'url': window.location.origin }
    }
  });

  app.className = 'page-enter';
  var crumbs = [{ label: t('page.breadcrumb.home'), href: '#/' }];
  if (config.parentLabel && config.parentHref) {
    crumbs.push({ label: config.parentLabel, href: config.parentHref });
  }
  crumbs.push({ label: config.title, href: '' });

  var products = config.products || [];
  var locale = currentLocale();

  app.innerHTML =
    '<div class="view-page">' +
      '<div class="container">' + _breadcrumbs(crumbs) + '</div>' +
      _pageHero(config.title, config.desc, config.heroClass || '') +
      '<div class="container mp-section">' +
        (config.filters
          ? '<div class="products-filter" role="group" aria-label="Filter">' +
              config.filters.map(function(f, i) {
                return '<button class="btn btn--filter' + (i === 0 ? ' btn--filter-active' : '') + '" data-mp-filter="' + f.value + '">' + f.label + '</button>';
              }).join('') +
            '</div>'
          : '') +
        _productGrid(products, config.emptyMsg) +
      '</div>' +
      (config.extraHTML || '') +
      _pageFooterBlock() +
    '</div>';

  _wireCategoryPage(app);
}

function _wireCategoryPage(app) {
  app.querySelectorAll('[data-mp-filter]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      app.querySelectorAll('[data-mp-filter]').forEach(function(b) {
        b.classList.remove('btn--filter-active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('btn--filter-active');
      btn.setAttribute('aria-pressed', 'true');
      var val = btn.dataset.mpFilter;
      app.querySelectorAll('.product-card').forEach(function(card) {
        if (val === 'all') { card.style.display = ''; return; }
        var col = card.dataset.collection || '';
        var brand = card.dataset.brand || '';
        card.style.display = (col === val || brand === val) ? '' : 'none';
      });
    });
  });

  app.querySelectorAll('.product-card__details').forEach(function(btn) {
    btn.addEventListener('click', function() { openProductModal(btn.dataset.productId); });
  });
  app.querySelectorAll('.product-card__cart').forEach(function(btn) {
    btn.addEventListener('click', function() {
      if (btn.getAttribute('aria-disabled') === 'true') return;
      cart.add(btn.dataset.cartId);
      showToast(t('products.added'), 'success');
    });
  });
  app.querySelectorAll('.product-card__wish').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var id = btn.dataset.wishId;
      wishlist.toggle(id);
      var isWished = wishlist.has(id);
      btn.classList.toggle('is-wished', isWished);
      btn.querySelector('svg').setAttribute('fill', isWished ? 'currentColor' : 'none');
    });
  });
}


// ── VIEW: MEN'S WATCHES ──

function renderMens(app) {
  _renderCategoryPage(app, {
    title: t('page.mens.title'),
    desc: t('page.mens.desc'),
    seoTitle: "Men's Luxury Watches — Rolex, Omega, Patek Philippe | ZIFARAA",
    seoDesc: "Shop men's luxury watches from Rolex, Omega, Patek Philippe, and Vacheron Constantin. Authenticated timepieces, white-glove delivery. ZIFARAA marketplace.",
    products: getProductsByGender('mens'),
    filters: [
      { label: t('products.filter.all'), value: 'all' },
      { label: 'Heritage', value: 'heritage' },
      { label: 'Sports', value: 'sports' },
      { label: 'Haute Horlogerie', value: 'haute' },
      { label: 'Modern', value: 'modern' }
    ]
  });
}


// ── VIEW: WOMEN'S WATCHES ──

function renderWomens(app) {
  _renderCategoryPage(app, {
    title: t('page.womens.title'),
    desc: t('page.womens.desc'),
    seoTitle: "Women's Luxury Watches — Cartier, Hermès, Apple Watch | ZIFARAA",
    seoDesc: "Discover women's luxury watches from Cartier, Hermès, and Apple. From the iconic Tank to the elegant Arceau. Authenticated, delivered worldwide.",
    products: getProductsByGender('womens'),
    filters: [
      { label: t('products.filter.all'), value: 'all' },
      { label: 'Cartier', value: 'cartier' },
      { label: 'Hermès', value: 'hermes' },
      { label: 'Apple', value: 'apple' }
    ]
  });
}


// ── VIEW: BOYS' WATCHES ──

function renderBoys(app) {
  _renderCategoryPage(app, {
    title: t('page.boys.title'),
    desc: t('page.boys.desc'),
    seoTitle: "Boys' Luxury Watches — Rolex, Omega, Apple Watch | ZIFARAA",
    seoDesc: "Inspire the next generation of watch collectors. Premium timepieces for boys from Rolex, Omega, and Apple Watch.",
    products: getProductsByGender('boys'),
    heroClass: 'page-hero--youth'
  });
}


// ── VIEW: GIRLS' WATCHES ──

function renderGirls(app) {
  _renderCategoryPage(app, {
    title: t('page.girls.title'),
    desc: t('page.girls.desc'),
    seoTitle: "Girls' Luxury Watches — Cartier, Apple Watch Hermès | ZIFARAA",
    seoDesc: "Elegant timepieces for girls. From Cartier's petite Tank to Apple Watch Hermès — watches that celebrate young style.",
    products: getProductsByGender('girls'),
    heroClass: 'page-hero--youth'
  });
}


// ── VIEW: NEW ARRIVALS ──

function renderNewArrivals(app) {
  _renderCategoryPage(app, {
    title: t('page.new.title'),
    desc: t('page.new.desc'),
    seoTitle: 'New Arrivals — Latest Luxury Watches | ZIFARAA',
    seoDesc: 'Discover the latest luxury watches added to ZIFARAA. Fresh arrivals from the world\'s finest watch maisons, authenticated and ready to ship.',
    products: getProductsByTag('new-arrival'),
    heroClass: 'page-hero--accent'
  });
}


// ── VIEW: LIMITED EDITIONS ──

function renderLimited(app) {
  _renderCategoryPage(app, {
    title: t('page.limited.title'),
    desc: t('page.limited.desc'),
    seoTitle: 'Limited Edition Luxury Watches — Rare Timepieces | ZIFARAA',
    seoDesc: 'Exclusive limited edition watches from Vacheron Constantin, Patek Philippe, and more. Rare collector pieces available on ZIFARAA.',
    products: getProductsByTag('limited-edition'),
    heroClass: 'page-hero--accent'
  });
}


// ── VIEW: APPLE WATCH ──

function renderAppleWatch(app) {
  _renderCategoryPage(app, {
    title: t('page.apple.title'),
    desc: t('page.apple.desc'),
    seoTitle: 'Apple Watch — Ultra 2, Hermès Series 10 | ZIFARAA',
    seoDesc: 'Shop Apple Watch on ZIFARAA. Apple Watch Ultra 2 and Apple Watch Hermès Series 10 — where technology meets luxury craftsmanship.',
    products: getProductsByTag('apple-watch'),
    heroClass: 'page-hero--modern'
  });
}


// ── VIEW: BRANDS ──

function renderBrands(app) {
  _setSEO({
    title: 'Luxury Watch Brands — Rolex, Patek Philippe, Cartier, Omega | ZIFARAA',
    description: 'Explore the world\'s most prestigious watch brands on ZIFARAA. Rolex, Patek Philippe, Cartier, Omega, Vacheron Constantin, Hermès, and Apple.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      'name': 'Luxury Watch Brands',
      'url': window.location.href
    }
  });

  app.className = 'page-enter';
  var crumbs = [
    { label: t('page.breadcrumb.home'), href: '#/' },
    { label: t('page.brands.title'), href: '' }
  ];

  app.innerHTML =
    '<div class="view-page">' +
      '<div class="container">' + _breadcrumbs(crumbs) + '</div>' +
      _pageHero(t('page.brands.title'), t('page.brands.desc')) +
      '<div class="container mp-section">' +
        '<div class="brands-grid">' +
          BRANDS.map(function(brand) {
            var count = getProductsByBrand(brand.id).length;
            var minPrice = getProductsByBrand(brand.id).reduce(function(m, p) { return Math.min(m, p.price); }, Infinity);
            return '<a href="#/brands/' + brand.id + '" class="brand-card">' +
              '<div class="brand-card__logo"><span>' + brand.logo + '</span></div>' +
              '<div class="brand-card__body">' +
                '<h2 class="brand-card__name">' + brand.name + '</h2>' +
                '<p class="brand-card__meta">' + brand.country + ' · ' + t('page.founded') + ' ' + brand.founded + '</p>' +
                '<p class="brand-card__desc">' + brand.description + '</p>' +
                '<span class="brand-card__count">' + count + ' ' + t('page.pieces') + (minPrice < Infinity ? ' · ' + t('page.from_price') + ' ' + formatPrice(minPrice, 'USD', currentLocale()) : '') + '</span>' +
              '</div>' +
            '</a>';
          }).join('') +
        '</div>' +
      '</div>' +
      _pageFooterBlock() +
    '</div>';
}


// ── VIEW: SINGLE BRAND ──

function renderBrandPage(app, brandId) {
  var brand = BRANDS.find(function(b) { return b.id === brandId; });
  if (!brand) { renderBrands(app); return; }

  var products = getProductsByBrand(brandId);

  _setSEO({
    title: brand.name + ' Watches — Shop Authenticated ' + brand.name + ' | ZIFARAA',
    description: 'Shop authenticated ' + brand.name + ' watches on ZIFARAA. ' + brand.description,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Brand',
      'name': brand.name,
      'url': window.location.href,
      'description': brand.description
    }
  });

  app.className = 'page-enter';
  var crumbs = [
    { label: t('page.breadcrumb.home'), href: '#/' },
    { label: t('page.brands.title'), href: '#/brands' },
    { label: brand.name, href: '' }
  ];

  app.innerHTML =
    '<div class="view-page">' +
      '<div class="container">' + _breadcrumbs(crumbs) + '</div>' +
      '<section class="page-hero page-hero--brand">' +
        '<div class="container">' +
          '<div class="brand-hero">' +
            '<div class="brand-hero__logo"><span>' + brand.logo + '</span></div>' +
            '<div class="brand-hero__info">' +
              '<h1 class="page-hero__title">' + brand.name + '</h1>' +
              '<p class="brand-hero__origin">' + brand.country + ' · Est. ' + brand.founded + '</p>' +
              '<p class="page-hero__desc">' + brand.description + '</p>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</section>' +
      '<div class="container mp-section">' +
        '<h2 class="mp-section__heading">' + brand.name + ' Collection</h2>' +
        _productGrid(products) +
      '</div>' +
      _pageFooterBlock() +
    '</div>';

  _wireCategoryPage(app);
}


// ── VIEW: LUXURY SERVICES ──

function renderServices(app) {
  _setSEO({
    title: 'Luxury Watch Services — Authentication, Concierge, Insurance | ZIFARAA',
    description: 'ZIFARAA offers authentication, personal shopping concierge, white-glove delivery, trade-in, aftercare, and insurance services for luxury watches.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'provider': { '@type': 'Organization', 'name': 'ZIFARAA' },
      'name': 'Luxury Watch Services',
      'url': window.location.href
    }
  });

  app.className = 'page-enter';
  var crumbs = [
    { label: t('page.breadcrumb.home'), href: '#/' },
    { label: t('page.services.title'), href: '' }
  ];

  var services = [
    { icon: '◈', key: 'auth' },
    { icon: '◉', key: 'concierge' },
    { icon: '▣', key: 'shipping' },
    { icon: '⟲', key: 'trade' },
    { icon: '⚙', key: 'care' },
    { icon: '◇', key: 'insurance' }
  ];

  app.innerHTML =
    '<div class="view-page">' +
      '<div class="container">' + _breadcrumbs(crumbs) + '</div>' +
      _pageHero(t('page.services.title'), t('page.services.desc')) +
      '<div class="container mp-section">' +
        '<div class="services-grid">' +
          services.map(function(s) {
            return '<article class="service-card">' +
              '<div class="service-card__icon">' + s.icon + '</div>' +
              '<h3 class="service-card__title">' + t('services.' + s.key) + '</h3>' +
              '<p class="service-card__desc">' + t('services.' + s.key + '.desc') + '</p>' +
            '</article>';
          }).join('') +
        '</div>' +
        '<div class="services-cta">' +
          '<a href="#/contact" class="btn btn--primary btn--lg">' + t('page.cta_consult') + '</a>' +
        '</div>' +
      '</div>' +
      _pageFooterBlock() +
    '</div>';
}


// ── VIEW: ABOUT (standalone page) ──

function renderAboutPage(app) {
  _setSEO({
    title: 'About ZIFARAA — The Premier Luxury Watch Marketplace',
    description: 'ZIFARAA is a curated luxury watch marketplace connecting collectors with authenticated timepieces from Rolex, Patek Philippe, Cartier, Omega, Vacheron Constantin, and Hermès.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'ZIFARAA',
      'description': 'Premium luxury watch marketplace',
      'url': window.location.origin,
      'contactPoint': { '@type': 'ContactPoint', 'email': 'hello@zifaraa.com', 'contactType': 'customer service' }
    }
  });

  app.className = 'page-enter';
  var crumbs = [
    { label: t('page.breadcrumb.home'), href: '#/' },
    { label: t('page.about.title'), href: '' }
  ];

  app.innerHTML =
    '<div class="view-page">' +
      '<div class="container">' + _breadcrumbs(crumbs) + '</div>' +
      _pageHero(t('page.about.title'), t('page.about.desc')) +
      '<div class="container mp-section">' +
        '<div class="about-page-grid">' +
          '<div class="about-page__text">' +
            '<p>' + t('about.body1') + '</p>' +
            '<p>' + t('about.body2') + '</p>' +
            '<p class="about-page__quote">' + t('about.body3') + '</p>' +
          '</div>' +
          '<div class="about-page__image">' +
            '<img src="https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=800&q=80&fm=webp" alt="ZIFARAA luxury watch collection" loading="lazy" width="800" height="1067">' +
          '</div>' +
        '</div>' +
        '<div class="about-stats">' +
          '<div class="about-stat"><span class="about-stat__number">7</span><span class="about-stat__label">Prestige Brands</span></div>' +
          '<div class="about-stat"><span class="about-stat__number">12</span><span class="about-stat__label">Curated Timepieces</span></div>' +
          '<div class="about-stat"><span class="about-stat__number">6</span><span class="about-stat__label">Luxury Services</span></div>' +
          '<div class="about-stat"><span class="about-stat__number">24/7</span><span class="about-stat__label">Concierge Support</span></div>' +
        '</div>' +
        '<div class="about-brands">' +
          '<h2 class="mp-section__heading">' + t('page.brands.title') + '</h2>' +
          '<div class="about-brands__logos">' +
            BRANDS.map(function(b) {
              return '<a href="#/brands/' + b.id + '" class="about-brands__item">' +
                '<span class="about-brands__logo">' + b.logo + '</span>' +
                '<span class="about-brands__name">' + b.name + '</span>' +
              '</a>';
            }).join('') +
          '</div>' +
        '</div>' +
      '</div>' +
      _pageFooterBlock() +
    '</div>';
}


// ── VIEW: CONTACT (standalone page) ──

function renderContactPage(app) {
  _setSEO({
    title: 'Contact ZIFARAA — Book a Luxury Watch Consultation',
    description: 'Contact ZIFARAA for luxury watch consultations, authentication inquiries, and concierge services. Our horological advisors are available by appointment.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      'name': 'Contact ZIFARAA',
      'url': window.location.href
    }
  });

  app.className = 'page-enter';
  var crumbs = [
    { label: t('page.breadcrumb.home'), href: '#/' },
    { label: t('page.contact.title'), href: '' }
  ];

  app.innerHTML =
    '<div class="view-page">' +
      '<div class="container">' + _breadcrumbs(crumbs) + '</div>' +
      _pageHero(t('page.contact.title'), t('page.contact.desc')) +
      '<div class="container mp-section">' +
        '<div class="contact-page-grid">' +
          '<div class="contact-page__form">' +
            '<form id="contact-page-form" class="form" novalidate>' +
              '<div class="form-group"><label class="form-label" for="cp-name">' + t('contact.name') + '</label><input class="form-input" type="text" id="cp-name" name="name" required autocomplete="name"><span class="form-error" id="cp-name-err" role="alert"></span></div>' +
              '<div class="form-group"><label class="form-label" for="cp-email">' + t('contact.email') + '</label><input class="form-input" type="email" id="cp-email" name="email" required autocomplete="email"><span class="form-error" id="cp-email-err" role="alert"></span></div>' +
              '<div class="form-group"><label class="form-label" for="cp-phone">' + t('contact.phone') + '</label><input class="form-input" type="tel" id="cp-phone" name="phone" autocomplete="tel"><span class="form-error" id="cp-phone-err" role="alert"></span></div>' +
              '<div class="form-group"><label class="form-label" for="cp-message">' + t('contact.message') + '</label><textarea class="form-input" id="cp-message" name="message" rows="5" required></textarea><span class="form-error" id="cp-message-err" role="alert"></span></div>' +
              '<button type="submit" class="btn btn--gold btn--full"><span>' + t('contact.submit') + '</span></button>' +
            '</form>' +
          '</div>' +
          '<div class="contact-page__info">' +
            '<div class="contact-info-block">' +
              '<h3>Visit</h3>' +
              '<address>' + t('footer.address') + '</address>' +
            '</div>' +
            '<div class="contact-info-block">' +
              '<h3>Write</h3>' +
              '<a href="mailto:hello@zifaraa.com">' + t('footer.email') + '</a>' +
            '</div>' +
            '<div class="contact-info-block">' +
              '<h3>Call</h3>' +
              '<a href="tel:+41220000000">' + t('footer.phone') + '</a>' +
            '</div>' +
            '<div class="contact-info-block">' +
              '<h3>Hours</h3>' +
              '<p>Monday – Friday: 9:00 – 18:00 CET<br>Saturday: 10:00 – 16:00 CET<br>Sunday: By appointment</p>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
      _pageFooterBlock() +
    '</div>';

  var form = document.getElementById('contact-page-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var btn = form.querySelector('[type="submit"]');
      btn.disabled = true;
      btn.querySelector('span').textContent = t('misc.loading');
      setTimeout(function() {
        form.reset();
        btn.disabled = false;
        btn.querySelector('span').textContent = t('contact.submit');
        showToast(t('contact.success'), 'success');
      }, 1200);
    });
  }
}


// ── VIEW: CART ──

function renderCart(app) {
  app.className = 'page-enter';
  const items   = cart.getItems();

  app.innerHTML = `
    <div class="view-page container">
      <div class="view-header">
        <h1 class="view-title" data-i18n="cart.heading">${t('cart.heading')}</h1>
      </div>
      ${items.length === 0 ? _empty() : _cartLayout(items)}
    </div>
  `;

  _wireCart();

  document.addEventListener('locale:changed', () => renderCart(app), { once: true });
  document.addEventListener('store:cart', () => {
    app.innerHTML = '';
    renderCart(app);
  }, { once: true });
}

function _empty() {
  return `
    <div class="empty-state">
      <h2 class="empty-state__title" data-i18n="cart.empty">${t('cart.empty')}</h2>
      <p class="empty-state__body" data-i18n="cart.empty.sub">${t('cart.empty.sub')}</p>
      <a href="#/" class="btn btn--primary" data-i18n="cart.empty.cta">${t('cart.empty.cta')}</a>
    </div>
  `;
}

function _cartLayout(items) {
  const subtotal = cart.getSubtotal();
  const locale   = currentLocale();

  return `
    <div class="checkout-layout">
      <div class="cart-items-list">
        ${items.map(item => _cartItem(item, locale)).join('')}
      </div>
      <aside class="checkout-summary-panel" aria-label="Order summary">
        <div class="order-summary">
          <h2 class="order-summary__title" data-i18n="checkout.summary">${t('checkout.summary')}</h2>
          <div class="order-summary__row">
            <span data-i18n="cart.subtotal">${t('cart.subtotal')}</span>
            <span id="cart-subtotal">${formatPrice(subtotal, 'USD', locale)}</span>
          </div>
          <div class="order-summary__row">
            <span data-i18n="cart.shipping">${t('cart.shipping')}</span>
            <span data-i18n="cart.shipping.val">${t('cart.shipping.val')}</span>
          </div>
          <div class="order-summary__row order-summary__row--total">
            <span data-i18n="cart.total">${t('cart.total')}</span>
            <span>${formatPrice(subtotal, 'USD', locale)}</span>
          </div>
          <button class="btn btn--gold btn--full" id="cart-checkout-btn" style="margin-top:var(--sp-6)">
            <span data-i18n="cart.proceed">${t('cart.proceed')}</span>
          </button>
        </div>
      </aside>
    </div>
  `;
}

function _cartItem(item, locale) {
  const product = getProductById(item.id);
  if (!product) return '';
  const lineTotal = formatPrice(product.price * item.qty, product.currency, locale);

  return `
    <div class="cart-item" data-item-id="${item.id}">
      <div class="cart-item__img">
        <img src="${product.images[0]}" alt="${product.name}" width="80" height="107" loading="lazy">
      </div>
      <div class="cart-item__details">
        <p class="cart-item__collection">${item.collection || ''}</p>
        <h3 class="cart-item__name">${product.name}</h3>
        <div class="qty-control" aria-label="Quantity">
          <button class="qty-btn" data-qty-dec="${item.id}" aria-label="Decrease quantity">−</button>
          <span class="qty-value" aria-live="polite">${item.qty}</span>
          <button class="qty-btn" data-qty-inc="${item.id}" aria-label="Increase quantity">+</button>
        </div>
        <button class="cart-item__remove" data-remove-id="${item.id}" aria-label="Remove ${product.name} from cart"
                data-i18n="cart.remove">${t('cart.remove')}</button>
      </div>
      <div class="cart-item__price">${lineTotal}</div>
    </div>
  `;
}

function _wireCart() {
  // Qty decrease
  document.querySelectorAll('[data-qty-dec]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.qtyDec;
      const item = cart.getItems().find(i => i.id === id);
      if (item) cart.updateQty(id, item.qty - 1);
    });
  });

  // Qty increase
  document.querySelectorAll('[data-qty-inc]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.qtyInc;
      const item = cart.getItems().find(i => i.id === id);
      if (item) cart.updateQty(id, item.qty + 1);
    });
  });

  // Remove
  document.querySelectorAll('[data-remove-id]').forEach(btn => {
    btn.addEventListener('click', () => {
      cart.remove(btn.dataset.removeId);
    });
  });

  // Proceed to checkout
  document.getElementById('cart-checkout-btn')?.addEventListener('click', () => {
    navigate('/checkout');
  });
}


// ── VIEW: WISHLIST ──

function renderWishlist(app) {
  app.className = 'page-enter';
  const ids   = wishlist.getItems();
  const locale = currentLocale();

  app.innerHTML = `
    <div class="view-page container">
      <div class="view-header">
        <h1 class="view-title" data-i18n="wishlist.heading">${t('wishlist.heading')}</h1>
      </div>
      ${ids.length === 0 ? _empty() : _grid(ids, locale)}
    </div>
  `;

  _wireWishlist();
  document.addEventListener('locale:changed', () => renderWishlist(app), { once: true });
}

function _empty() {
  return `
    <div class="empty-state">
      <h2 class="empty-state__title" data-i18n="wishlist.empty">${t('wishlist.empty')}</h2>
      <p class="empty-state__body" data-i18n="wishlist.empty.sub">${t('wishlist.empty.sub')}</p>
      <a href="#/" class="btn btn--primary" data-i18n="wishlist.empty.cta">${t('wishlist.empty.cta')}</a>
    </div>
  `;
}

function _grid(ids, locale) {
  return `
    <div class="products-grid">
      ${ids.map(id => {
        const p = getProductById(id);
        if (!p) return '';
        const price = formatPrice(p.price, p.currency, locale);
        return `
          <article class="product-card" data-product-id="${p.id}">
            <div class="product-card__img-wrap">
              <img class="product-card__img"
                   src="${p.images[0]}"
                   alt="${p.name}"
                   loading="lazy"
                   width="400" height="533">
              ${p.badge ? `<span class="product-card__badge">${p.badge}</span>` : ''}
              <button class="product-card__wish is-wished"
                      data-wish-remove="${p.id}"
                      aria-label="${t('wishlist.remove')}: ${p.name}"
                      aria-pressed="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </button>
            </div>
            <div class="product-card__body">
              <div class="product-card__meta">
                <span class="product-card__collection">${p.collection}</span>
                <span class="product-card__price">${price}</span>
              </div>
              <h3 class="product-card__name">${p.name}</h3>
              <div class="product-card__actions">
                <button class="btn btn--primary btn--sm" data-view-id="${p.id}">${t('products.view')}</button>
                <button class="btn btn--gold btn--sm" data-move-id="${p.id}"
                        ${!p.inStock ? 'aria-disabled="true"' : ''}>
                  ${t('wishlist.move')}
                </button>
              </div>
            </div>
          </article>
        `;
      }).join('')}
    </div>
  `;
}

function _wireWishlist() {
  document.querySelectorAll('[data-wish-remove]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.wishRemove;
      wishlist.remove(id);
      btn.closest('.product-card')?.remove();
      if (!document.querySelector('.product-card')) {
        const grid = document.querySelector('.products-grid');
        if (grid) grid.outerHTML = _empty();
      }
    });
  });

  document.querySelectorAll('[data-move-id]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.getAttribute('aria-disabled') === 'true') return;
      const id = btn.dataset.moveId;
      cart.add(id);
      wishlist.remove(id);
      btn.closest('.product-card')?.remove();
      showToast(t('products.added'), 'success');
    });
  });

  document.querySelectorAll('[data-view-id]').forEach(btn => {
    btn.addEventListener('click', () => {
      openProductModal(btn.dataset.viewId);
    });
  });
}


// ── VIEW: AUTH ──

function renderAuth(app) {
  app.className = 'page-enter';

  if (auth.isLoggedIn()) {
    _renderAccountPage(app);
    return;
  }

  _renderLoginRegister(app, 'login');
  document.addEventListener('locale:changed', () => renderAuth(app), { once: true });
}

function _renderLoginRegister(app, activeTab = 'login') {
  const isLogin = activeTab === 'login';

  app.innerHTML = `
    <div class="view-page container">
      <div style="max-width:480px">
        <div class="view-header">
          <h1 class="view-title" data-i18n="auth.heading.${activeTab}">${t(`auth.heading.${activeTab}`)}</h1>
        </div>

        <div class="auth-tabs" role="tablist">
          <button class="auth-tab${isLogin ? ' auth-tab--active' : ''}"
                  role="tab" aria-selected="${isLogin}"
                  id="tab-login" data-auth-tab="login"
                  data-i18n="auth.tab.login">${t('auth.tab.login')}</button>
          <button class="auth-tab${!isLogin ? ' auth-tab--active' : ''}"
                  role="tab" aria-selected="${!isLogin}"
                  id="tab-register" data-auth-tab="register"
                  data-i18n="auth.tab.register">${t('auth.tab.register')}</button>
        </div>

        <form id="auth-form" novalidate>
          ${!isLogin ? `
          <div class="form-group">
            <label class="form-label" for="auth-name" data-i18n="auth.name">${t('auth.name')}</label>
            <input class="form-input" type="text" id="auth-name" name="name"
                   autocomplete="name" required
                   placeholder="${t('auth.name')}">
            <span class="form-error" id="auth-name-err" role="alert"></span>
          </div>
          ` : ''}

          <div class="form-group">
            <label class="form-label" for="auth-email" data-i18n="auth.email">${t('auth.email')}</label>
            <input class="form-input" type="email" id="auth-email" name="email"
                   autocomplete="email" required
                   placeholder="${t('auth.email')}">
            <span class="form-error" id="auth-email-err" role="alert"></span>
          </div>

          <div class="form-group">
            <label class="form-label" for="auth-password" data-i18n="auth.password">${t('auth.password')}</label>
            <input class="form-input" type="password" id="auth-password" name="password"
                   autocomplete="${isLogin ? 'current-password' : 'new-password'}" required
                   minlength="8"
                   placeholder="${t('auth.password')}">
            <span class="form-error" id="auth-password-err" role="alert"></span>
          </div>

          ${!isLogin ? `
          <div class="form-group">
            <label class="form-label" for="auth-confirm" data-i18n="auth.password.confirm">${t('auth.password.confirm')}</label>
            <input class="form-input" type="password" id="auth-confirm" name="confirm"
                   autocomplete="new-password" required
                   placeholder="${t('auth.password.confirm')}">
            <span class="form-error" id="auth-confirm-err" role="alert"></span>
          </div>
          ` : ''}

          ${isLogin ? `
          <div style="text-align:end; margin-bottom:var(--sp-6)">
            <a href="#" class="footer-col__link" data-i18n="auth.forgot">${t('auth.forgot')}</a>
          </div>
          ` : ''}

          <button type="submit" class="btn btn--gold btn--full" id="auth-submit">
            <span data-i18n="auth.submit.${activeTab}">${t(`auth.submit.${activeTab}`)}</span>
          </button>
        </form>
      </div>
    </div>
  `;

  _wireAuth(activeTab, app);
}

function _renderAccountPage(app) {
  const user = auth.getUser();
  app.innerHTML = `
    <div class="view-page container">
      <div style="max-width:480px">
        <div class="view-header">
          <h1 class="view-title" data-i18n="nav.account">${t('nav.account')}</h1>
        </div>
        <p style="color:var(--color-muted-light);margin-bottom:var(--sp-8)">
          ${user?.name || user?.email || ''}
        </p>
        <div style="display:flex;flex-direction:column;gap:var(--sp-4)">
          <a href="#/wishlist" class="btn btn--outline">${t('nav.wishlist')}</a>
          <a href="#/cart"     class="btn btn--outline">${t('nav.cart')}</a>
          <button class="btn btn--primary" id="auth-logout">
            ${t('nav.logout')}
          </button>
        </div>
      </div>
    </div>
  `;

  document.getElementById('auth-logout')?.addEventListener('click', () => {
    auth.logout();
    showToast(t('auth.logout.success'), 'info');
    renderAuth(app);
  });
}

function _wireAuth(activeTab, app) {
  // Tab switching
  document.querySelectorAll('[data-auth-tab]').forEach(btn => {
    btn.addEventListener('click', () => {
      _renderLoginRegister(app, btn.dataset.authTab);
    });
  });

  // Form submission
  const form = document.getElementById('auth-form');
  form?.addEventListener('submit', async e => {
    e.preventDefault();
    if (!_validateAuthForm(form, activeTab)) return;

    const submitBtn = document.getElementById('auth-submit');
    submitBtn.disabled = true;
    submitBtn.querySelector('span').textContent = t('misc.loading');

    const email    = form.querySelector('#auth-email')?.value.trim();
    const password = form.querySelector('#auth-password')?.value;
    const name     = form.querySelector('#auth-name')?.value.trim();

    try {
      if (activeTab === 'login') {
        await auth.login(email, password);
      } else {
        await auth.register(email, password, name);
      }
      navigate('/');
    } catch {
      submitBtn.disabled = false;
      submitBtn.querySelector('span').textContent = t(`auth.submit.${activeTab}`);
    }
  });

  // Validate on blur
  form?.querySelectorAll('[required]').forEach(field => {
    field.addEventListener('blur', () => _validateAuthField(field, activeTab));
  });
}

function _validateAuthField(field, mode) {
  const errEl = document.getElementById(`${field.id}-err`);
  if (!errEl) return true;

  if (field.type === 'email' && field.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
    return _setError(field, errEl, t('error.email'));
  }
  if (field.type === 'password' && field.value && field.value.length < 8) {
    return _setError(field, errEl, t('error.password.short'));
  }
  if (field.id === 'auth-confirm') {
    const pw = document.getElementById('auth-password')?.value;
    if (field.value !== pw) return _setError(field, errEl, t('error.password.match'));
  }
  if (field.required && !field.value.trim()) {
    return _setError(field, errEl, t('error.required'));
  }

  _clearError(field, errEl);
  return true;
}

function _validateAuthForm(form, mode) {
  let valid = true;
  form.querySelectorAll('[required]').forEach(f => {
    if (!_validateAuthField(f, mode)) valid = false;
  });
  return valid;
}

function _setError(field, errEl, msg) {
  errEl.textContent = msg;
  field.setAttribute('aria-invalid', 'true');
  field.setAttribute('aria-describedby', errEl.id);
  return false;
}

function _clearError(field, errEl) {
  errEl.textContent = '';
  field.setAttribute('aria-invalid', 'false');
  field.removeAttribute('aria-describedby');
}


// ── VIEW: CHECKOUT ──

// ── State machine: 'cart_review' | 'shipping_info' | 'payment' | 'confirmed' ──
var checkoutState = 'cart_review';
var shippingData  = {};

function renderCheckout(app) {
  app.className = 'page-enter';
  checkoutState = 'cart_review';
  // Restore shipping data if back-navigated
  const saved = localStorage.getItem('zifaraa_shipping');
  if (saved) try { shippingData = JSON.parse(saved); } catch {}

  if (cart.getCount() === 0) {
    navigate('/cart');
    return;
  }

  _renderState(app);
  document.addEventListener('locale:changed', () => renderCheckout(app), { once: true });
}

function renderConfirmation(app) {
  app.className = 'page-enter';
  const o = order.get();

  app.innerHTML = `
    <div class="view-page container">
      <div class="order-confirmed">
        <div class="order-confirmed__icon" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <p class="order-confirmed__number">
          <span data-i18n="checkout.confirmed.order">${t('checkout.confirmed.order')}</span>
          ${o?.orderNumber || ''}
        </p>
        <h1 class="section-heading" data-i18n="checkout.confirmed.heading">${t('checkout.confirmed.heading')}</h1>
        <p class="section-body" data-i18n="checkout.confirmed.body">${t('checkout.confirmed.body')}</p>

        ${o?.items?.length ? `
          <div style="margin-block:var(--sp-8)">
            ${o.items.map(item => {
              const p = getProductById(item.id);
              if (!p) return '';
              return `
                <div class="cart-item" style="grid-template-columns:64px 1fr">
                  <div class="cart-item__img">
                    <img src="${p.images[0]}" alt="${p.name}" width="64" height="85" loading="lazy">
                  </div>
                  <div>
                    <h3 class="cart-item__name">${p.name}</h3>
                    <p class="cart-item__collection">Qty: ${item.qty}</p>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        ` : ''}

        <a href="#/" class="btn btn--gold" data-i18n="checkout.confirmed.cta">${t('checkout.confirmed.cta')}</a>
      </div>
    </div>
  `;
}

// ── Render current step ────────────────────────────────────────────────────────
function _renderState(app) {
  const locale   = currentLocale();
  const items    = cart.getItems();
  const subtotal = cart.getSubtotal();

  app.innerHTML = `
    <div class="view-page container">
      <div class="view-header">
        <h1 class="view-title" data-i18n="checkout.title">${t('checkout.title')}</h1>
      </div>
      ${_steps()}
      <div class="checkout-layout">
        <div id="checkout-main">
          ${checkoutState === 'cart_review'   ? _stepReview(items, locale) : ''}
          ${checkoutState === 'shipping_info' ? _stepShipping() : ''}
          ${checkoutState === 'payment'       ? _stepPayment(items, locale) : ''}
        </div>
        <aside class="checkout-summary-panel" aria-label="Order summary">
          ${_summary(items, subtotal, locale)}
        </aside>
      </div>
    </div>
  `;

  _wireStep(app);
}

function _steps() {
  const steps = [
    { key: 'checkout.step.review',   id: 'cart_review'   },
    { key: 'checkout.step.shipping', id: 'shipping_info' },
    { key: 'checkout.step.payment',  id: 'payment'       },
  ];

  return `
    <div class="checkout-steps" role="list" aria-label="Checkout progress">
      ${steps.map((step, i) => {
        const idx    = steps.findIndex(s => s.id === checkoutState);
        const done   = i < idx;
        const active = step.id === checkoutState;
        const cls    = active ? 'checkout-step--active' : done ? 'checkout-step--done' : '';
        return `
          ${i > 0 ? '<div class="checkout-step__divider" aria-hidden="true"></div>' : ''}
          <div class="checkout-step ${cls}" role="listitem" aria-current="${active ? 'step' : 'false'}">
            <span class="checkout-step__num" aria-hidden="true">
              ${done ? '✓' : i + 1}
            </span>
            <span data-i18n="${step.key}">${t(step.key)}</span>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// ── Step 1: Cart Review ───────────────────────────────────────────────────────
function _stepReview(items, locale) {
  return `
    <div class="cart-items-list">
      ${items.map(item => {
        const p = getProductById(item.id);
        if (!p) return '';
        return `
          <div class="cart-item" data-item-id="${item.id}">
            <div class="cart-item__img">
              <img src="${p.images[0]}" alt="${p.name}" width="80" height="107" loading="lazy">
            </div>
            <div class="cart-item__details">
              <h3 class="cart-item__name">${p.name}</h3>
              <div class="qty-control">
                <button class="qty-btn" data-qty-dec="${p.id}">−</button>
                <span class="qty-value">${item.qty}</span>
                <button class="qty-btn" data-qty-inc="${p.id}">+</button>
              </div>
            </div>
            <div class="cart-item__price">${formatPrice(p.price * item.qty, p.currency, locale)}</div>
          </div>
        `;
      }).join('')}
      <div style="margin-top:var(--sp-8)">
        <button class="btn btn--gold" id="step-next" data-i18n="checkout.next">
          ${t('checkout.next')}
        </button>
      </div>
    </div>
  `;
}

// ── Step 2: Shipping Info ─────────────────────────────────────────────────────
function _stepShipping() {
  const d = shippingData;
  const field = (id, label, type = 'text', ac = '', required = true) => `
    <div class="form-group">
      <label class="form-label" for="${id}" data-i18n="${label}">${t(label)}</label>
      <input class="form-input" type="${type}" id="${id}" name="${id}"
             autocomplete="${ac}" ${required ? 'required' : ''}
             value="${d[id] || ''}"
             placeholder="${t(label)}">
      ${required ? `<span class="form-error" id="${id}-err" role="alert"></span>` : ''}
    </div>
  `;

  const countries = ['United Arab Emirates','Saudi Arabia','Kuwait','Bahrain','Qatar','Oman',
    'United States','United Kingdom','Germany','France','Switzerland','Italy','Japan','Singapore','Australia'];

  return `
    <form id="shipping-form" novalidate>
      ${field('ship-name',  'checkout.shipping.name',  'text',  'name')}
      ${field('ship-email', 'checkout.shipping.email', 'email', 'email')}
      ${field('ship-phone', 'checkout.shipping.phone', 'tel',   'tel')}
      ${field('ship-addr1', 'checkout.shipping.addr1', 'text',  'address-line1')}
      ${field('ship-addr2', 'checkout.shipping.addr2', 'text',  'address-line2', false)}
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--sp-4)">
        ${field('ship-city', 'checkout.shipping.city', 'text', 'address-level2')}
        ${field('ship-zip',  'checkout.shipping.zip',  'text', 'postal-code')}
      </div>
      <div class="form-group">
        <label class="form-label" for="ship-country" data-i18n="checkout.shipping.country">${t('checkout.shipping.country')}</label>
        <select class="form-input" id="ship-country" name="ship-country" required autocomplete="country-name">
          <option value="">—</option>
          ${countries.map(c => `<option value="${c}" ${d['ship-country'] === c ? 'selected' : ''}>${c}</option>`).join('')}
        </select>
        <span class="form-error" id="ship-country-err" role="alert"></span>
      </div>
      <div style="display:flex;gap:var(--sp-4);margin-top:var(--sp-8)">
        <button type="button" class="btn btn--outline" id="step-back"
                data-i18n="checkout.back">${t('checkout.back')}</button>
        <button type="submit" class="btn btn--gold" id="step-next"
                data-i18n="checkout.next">${t('checkout.next')}</button>
      </div>
    </form>
  `;
}

// ── Step 3: Payment ───────────────────────────────────────────────────────────
function _stepPayment(items, locale) {
  const hasStripe = !!window.ZIFARAA_CONFIG?.stripePublishableKey;

  return `
    <div>
      <h2 class="section-label" style="margin-bottom:var(--sp-6)" data-i18n="checkout.payment.card">${t('checkout.payment.card')}</h2>

      <form id="payment-form" novalidate>
        ${hasStripe
          ? `<div id="stripe-card-element" style="padding:var(--sp-4);background:var(--color-bg-surface);border:1px solid var(--color-border-subtle);border-radius:var(--radius-sm);min-height:48px;"></div>`
          : _mockCardInput()
        }
        <div style="display:flex;gap:var(--sp-4);margin-top:var(--sp-8)">
          <button type="button" class="btn btn--outline" id="step-back"
                  data-i18n="checkout.back">${t('checkout.back')}</button>
          <button type="submit" class="btn btn--gold" id="step-place"
                  data-i18n="checkout.place">${t('checkout.place')}</button>
        </div>
        <p style="font-size:var(--text-xs);color:var(--color-muted);margin-top:var(--sp-5)">
          🔒 Your payment information is encrypted and secure.
        </p>
      </form>
    </div>
  `;
}

function _mockCardInput() {
  return `
    <div style="display:flex;flex-direction:column;gap:var(--sp-4)">
      <div class="form-group" style="margin:0">
        <label class="form-label" for="mock-card">Card Number</label>
        <input class="form-input" type="text" id="mock-card"
               placeholder="1234 5678 9012 3456"
               maxlength="19"
               autocomplete="cc-number">
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--sp-4)">
        <div class="form-group" style="margin:0">
          <label class="form-label" for="mock-expiry">Expiry</label>
          <input class="form-input" type="text" id="mock-expiry"
                 placeholder="MM / YY" maxlength="7"
                 autocomplete="cc-exp">
        </div>
        <div class="form-group" style="margin:0">
          <label class="form-label" for="mock-cvv">CVV</label>
          <input class="form-input" type="text" id="mock-cvv"
                 placeholder="123" maxlength="4"
                 autocomplete="cc-csc">
        </div>
      </div>
      <p style="font-size:var(--text-xs);color:var(--color-gold);letter-spacing:0.08em">
        SIMULATED PAYMENT — no real transaction occurs
      </p>
    </div>
  `;
}

// ── Summary sidebar ───────────────────────────────────────────────────────────
function _summary(items, subtotal, locale) {
  return `
    <div class="order-summary">
      <h2 class="order-summary__title" data-i18n="checkout.summary">${t('checkout.summary')}</h2>
      ${items.map(item => {
        const p = getProductById(item.id);
        if (!p) return '';
        return `
          <div class="order-summary__row">
            <span style="max-width:60%">${p.name} ×${item.qty}</span>
            <span>${formatPrice(p.price * item.qty, p.currency, locale)}</span>
          </div>
        `;
      }).join('')}
      <div class="order-summary__row">
        <span data-i18n="cart.shipping">${t('cart.shipping')}</span>
        <span data-i18n="cart.shipping.val">${t('cart.shipping.val')}</span>
      </div>
      <div class="order-summary__row order-summary__row--total">
        <span data-i18n="cart.total">${t('cart.total')}</span>
        <span>${formatPrice(subtotal, 'USD', locale)}</span>
      </div>
    </div>
  `;
}

// ── Step wiring ───────────────────────────────────────────────────────────────
function _wireStep(app) {
  // Qty controls in cart review
  document.querySelectorAll('[data-qty-dec]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.qtyDec;
      const item = cart.getItems().find(i => i.id === id);
      if (item) { cart.updateQty(id, item.qty - 1); _renderState(app); }
    });
  });
  document.querySelectorAll('[data-qty-inc]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.qtyInc;
      const item = cart.getItems().find(i => i.id === id);
      if (item) { cart.updateQty(id, item.qty + 1); _renderState(app); }
    });
  });

  // Next / back
  document.getElementById('step-next')?.addEventListener('click', () => {
    if (checkoutState === 'cart_review') {
      checkoutState = 'shipping_info';
      _renderState(app);
    }
  });

  document.getElementById('step-back')?.addEventListener('click', () => {
    if (checkoutState === 'shipping_info') checkoutState = 'cart_review';
    else if (checkoutState === 'payment')   checkoutState = 'shipping_info';
    _renderState(app);
  });

  // Shipping form submit
  document.getElementById('shipping-form')?.addEventListener('submit', e => {
    e.preventDefault();
    const form = e.target;
    if (!_validateShipping(form)) return;

    // Persist shipping data
    const data = {};
    form.querySelectorAll('input, select').forEach(f => { data[f.id] = f.value; });
    shippingData = data;
    localStorage.setItem('zifaraa_shipping', JSON.stringify(data));

    checkoutState = 'payment';
    _renderState(app);
  });

  // Payment form submit
  document.getElementById('payment-form')?.addEventListener('submit', async e => {
    e.preventDefault();
    const placeBtn = document.getElementById('step-place');
    placeBtn.disabled = true;
    placeBtn.textContent = t('checkout.processing');

    // INTEGRATION HOOK: replace with real Stripe / PayPal API call
    const orderData = await _submitOrder(cart.getItems(), shippingData);

    order.set({
      ...orderData,
      items:    cart.getItems(),
      shipping: shippingData,
    });
    cart.clear();
    localStorage.removeItem('zifaraa_shipping');

    track('order_placed', { orderNumber: orderData.orderNumber, total: cart.getSubtotal() });
    navigate('/order-confirmation');
  });

  // Card formatting
  const cardInput = document.getElementById('mock-card');
  cardInput?.addEventListener('input', () => {
    let v = cardInput.value.replace(/\D/g, '').slice(0, 16);
    cardInput.value = v.match(/.{1,4}/g)?.join(' ') || v;
  });

  const expiryInput = document.getElementById('mock-expiry');
  expiryInput?.addEventListener('input', () => {
    let v = expiryInput.value.replace(/\D/g, '').slice(0, 4);
    if (v.length >= 3) v = `${v.slice(0, 2)} / ${v.slice(2)}`;
    expiryInput.value = v;
  });
}

function _validateShipping(form) {
  let valid = true;
  form.querySelectorAll('[required]').forEach(field => {
    const errEl = document.getElementById(`${field.id}-err`);
    if (!field.value.trim()) {
      if (errEl) errEl.textContent = t('error.required');
      field.setAttribute('aria-invalid', 'true');
      if (errEl) field.setAttribute('aria-describedby', errEl.id);
      valid = false;
    } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
      if (errEl) errEl.textContent = t('error.email');
      field.setAttribute('aria-invalid', 'true');
      valid = false;
    } else {
      if (errEl) errEl.textContent = '';
      field.setAttribute('aria-invalid', 'false');
    }
  });
  return valid;
}

// INTEGRATION HOOK: replace body with real API call
async function _submitOrder(items, shipping) {
  // const res = await fetch('/api/orders', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ items, shipping })
  // });
  // return res.json();

  await new Promise(r => setTimeout(r, 1600));
  return { orderNumber: 'ZIF-' + String(Date.now()).slice(-6) };
}


// ── ROUTER ──

var ROUTES = {
  '/':                    renderHome,
  '/home':                renderHome,
  '/mens':                renderMens,
  '/womens':              renderWomens,
  '/boys':                renderBoys,
  '/girls':               renderGirls,
  '/brands':              renderBrands,
  '/new-arrivals':        renderNewArrivals,
  '/limited-editions':    renderLimited,
  '/apple-watch':         renderAppleWatch,
  '/services':            renderServices,
  '/about':               renderAboutPage,
  '/contact':             renderContactPage,
  '/cart':                renderCart,
  '/wishlist':            renderWishlist,
  '/checkout':            renderCheckout,
  '/auth':                renderAuth,
  '/order-confirmation':  renderConfirmation,
};

var currentPath = null;
var _firstRender = true;

function navigate(path) {
  const app    = document.getElementById('app');
  const header = document.getElementById('site-header');
  if (!app) return;

  // Normalise path
  const normPath = path.startsWith('/') ? path : `/${path}`;
  currentPath = normPath;

  const isHome = normPath === '/' || normPath === '/home';

  // Update header appearance
  if (header) {
    header.classList.toggle('site-header--scrolled', !isHome);
  }

  // Destroy Lenis + scroll triggers for sub-views; ensure body scroll is unlocked
  if (!isHome) pauseAnimations();
  document.body.style.overflow = '';

  // Render view (handle dynamic /brands/:id route)
  var viewFn = ROUTES[normPath];
  var brandMatch = !viewFn && normPath.match(/^\/brands\/(.+)$/);
  app.innerHTML = '';
  if (brandMatch) {
    renderBrandPage(app, brandMatch[1]);
  } else {
    (viewFn || renderHome)(app);
  }

  // After home renders, kick off scroll animations (skip first render — initAnimations handles it)
  if (isHome && !_firstRender) {
    requestAnimationFrame(() => reinitHomeAnimations());
  }
  _firstRender = false;

  // Scroll to top (unless section anchor present)
  window.scrollTo({ top: 0, behavior: 'instant' });

  // Update URL hash (use location.hash instead of pushState — pushState fails under file://)
  var newHash = '#' + normPath;
  if (window.location.hash !== newHash) {
    window.location.hash = newHash;
  }
}

function initRouter() {
  // Handle hash changes (back/forward, direct links)
  window.addEventListener('hashchange', _handleHash);
  window.addEventListener('popstate',   _handleHash);

  // Handle all nav clicks globally (event delegation)
  document.addEventListener('click', e => {
    const link = e.target.closest('a[href^="#/"]');
    if (!link) return;
    e.preventDefault();
    const path = link.getAttribute('href').replace(/^#/, '') || '/';
    navigate(path);
  });

  // Initial render
  _handleHash();
}

function _handleHash() {
  const hash = window.location.hash.replace(/^#/, '') || '/';
  // Strip query params for routing, keep for view
  const path = hash.split('?')[0] || '/';
  if (path !== currentPath) navigate(path);
}


// ── APP BOOT ──


// ── Reduced motion check ──────────────────────────────────────────────────────
var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
window.ZIFARAA_REDUCED_MOTION = prefersReducedMotion;

// ── Boot ──────────────────────────────────────────────────────────────────────
async function boot() {
  // 1. Language
  initLocale();

  // 2. Store (cart/wishlist badges, auth state)
  initStore();

  // 3. Router (renders initial view)
  initRouter();

  // 4. Animations (Lenis + GSAP — only runs on homepage)
  initAnimations();

  // 5. Wire global UI: nav scroll, mobile menu, language switcher
  _wireNav();
  _wireLangSwitcher();
  _wireLoader();
}

// ── Loader ────────────────────────────────────────────────────────────────────
function _dismissLoader() {
  var loader = document.getElementById('loader');
  if (!loader || loader.dataset.dismissed) return;
  loader.dataset.dismissed = '1';

  loader.style.transition = 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
  loader.style.pointerEvents = 'none';

  var percent = document.getElementById('loader-percent');
  if (percent) percent.textContent = '100%';

  var bar = loader.querySelector('.loader-bar');
  if (bar) bar.style.transform = 'scaleX(1)';

  requestAnimationFrame(function() {
    loader.style.opacity = '0';
    loader.addEventListener('transitionend', function() {
      loader.remove();
    }, { once: true });
    setTimeout(function() { if (loader.parentNode) loader.remove(); }, 800);
  });
}

function _wireLoader() {
  var loader  = document.getElementById('loader');
  var percent = document.getElementById('loader-percent');
  var bar     = loader ? loader.querySelector('.loader-bar') : null;
  var shimmer = loader ? loader.querySelector('.loader-shimmer') : null;

  if (!loader) return;

  setTimeout(_dismissLoader, 2000);

  var chars = loader.querySelectorAll('.loader-brand span');

  if (prefersReducedMotion || typeof gsap === 'undefined') {
    chars.forEach(function(ch) { ch.style.opacity = '1'; ch.style.transform = 'none'; ch.style.filter = 'none'; });
    if (bar) { bar.style.transform = 'scaleX(1)'; }
    if (percent) percent.textContent = '100%';
    setTimeout(_dismissLoader, 400);
    return;
  }

  var tl = gsap.timeline({
    defaults: { ease: 'power3.out' },
    onComplete: _dismissLoader
  });

  tl.to(chars, {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    duration: 0.5,
    stagger: 0.06
  });

  if (shimmer) {
    tl.to(shimmer, {
      opacity: 1,
      x: '200%',
      duration: 0.6,
      ease: 'power2.inOut'
    }, '-=0.15');
    tl.to(shimmer, { opacity: 0, duration: 0.2 });
  }

  if (bar) {
    tl.to(bar, {
      scaleX: 1,
      duration: 0.8,
      ease: 'power2.inOut'
    }, '-=0.6');
  }

  var prog = { v: 0 };
  tl.to(prog, {
    v: 100,
    duration: 0.8,
    ease: 'power2.inOut',
    onUpdate: function() {
      if (percent) percent.textContent = Math.floor(prog.v) + '%';
    }
  }, '<');
}

// ── Nav ───────────────────────────────────────────────────────────────────────
function _wireNav() {
  const header    = document.getElementById('site-header');
  const hamburger = document.getElementById('nav-hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!header) return;

  // Transparent → solid on scroll
  let lastScroll = 0;
  const onScroll = () => {
    const scroll = window.scrollY;
    header.classList.toggle('site-header--scrolled', scroll > 80);
    header.classList.toggle('site-header--hidden', scroll > lastScroll && scroll > 200);
    lastScroll = scroll;
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile menu
  hamburger?.addEventListener('click', () => {
    const open = mobileMenu?.classList.toggle('mobile-menu--open');
    hamburger.setAttribute('aria-expanded', String(open));
    mobileMenu?.setAttribute('aria-hidden', String(!open));
    document.body.style.overflow = open ? 'hidden' : '';
  });

  // Close mobile menu on link click
  mobileMenu?.querySelectorAll('a, button[data-lang]').forEach(el => {
    el.addEventListener('click', () => {
      mobileMenu.classList.remove('mobile-menu--open');
      hamburger?.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (mobileMenu?.classList.contains('mobile-menu--open') &&
        !mobileMenu.contains(e.target) &&
        !hamburger?.contains(e.target)) {
      mobileMenu.classList.remove('mobile-menu--open');
      hamburger?.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  });

  // Mega-menu dropdowns
  document.querySelectorAll('[data-dropdown]').forEach(function(dd) {
    var trigger = dd.querySelector('.nav__link--trigger');
    var menu = dd.querySelector('.mega-menu');
    if (!trigger || !menu) return;
    var closeTimer = null;
    function openDD() { clearTimeout(closeTimer); dd.setAttribute('data-open', ''); trigger.setAttribute('aria-expanded', 'true'); menu.setAttribute('aria-hidden', 'false'); }
    function closeDD() { closeTimer = setTimeout(function() { dd.removeAttribute('data-open'); trigger.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-hidden', 'true'); }, 200); }
    dd.addEventListener('mouseenter', openDD);
    dd.addEventListener('mouseleave', closeDD);
    trigger.addEventListener('click', function(e) { e.preventDefault(); dd.hasAttribute('data-open') ? closeDD() : openDD(); });
    menu.addEventListener('mouseenter', function() { clearTimeout(closeTimer); });
    menu.querySelectorAll('a').forEach(function(a) { a.addEventListener('click', function() { dd.removeAttribute('data-open'); trigger.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-hidden', 'true'); }); });
  });

  // Close mega-menu on outside click
  document.addEventListener('click', function(e) {
    document.querySelectorAll('[data-dropdown][data-open]').forEach(function(dd) {
      if (!dd.contains(e.target)) {
        dd.removeAttribute('data-open');
        var trig = dd.querySelector('.nav__link--trigger');
        var m = dd.querySelector('.mega-menu');
        if (trig) trig.setAttribute('aria-expanded', 'false');
        if (m) m.setAttribute('aria-hidden', 'true');
      }
    });
  });

  // Nav link active state based on current route
  function _updateNavActive() {
    var hash = window.location.hash.replace(/^#/, '') || '/';
    document.querySelectorAll('.nav__link:not(.nav__link--trigger)').forEach(function(link) {
      var href = (link.getAttribute('href') || '').replace(/^#/, '');
      link.classList.toggle('nav__link--active', href === hash);
    });
  }
  window.addEventListener('hashchange', _updateNavActive);
  _updateNavActive();
}

// ── Language switcher ─────────────────────────────────────────────────────────
function _wireLangSwitcher() {
  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-lang]');
    if (!btn) return;
    setLocale(btn.dataset.lang);
  });

  // Re-render active view when locale changes (views re-render themselves via their own locale:changed listener)
  // The static [data-i18n] elements are already updated by i18n.js; dynamic views handle their own re-render.
}

// ── Start ─────────────────────────────────────────────────────────────────────
boot();


})();

