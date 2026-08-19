import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedClients from "./components/TrustedClients";
import WhatWeDo from "./components/WhatWeDo";
import HowWePartner from "./components/HowWePartner";
import ByTheNumbers from "./components/ByTheNumbers";
import BuiltByRaintels from "./components/BuiltByRaintels";
import QuoteSection from "./components/QuoteSection";
import DomainExperience from "./components/DomainExperience";
import CTAAndFooter from "./components/CTAAndFooter";

import Industries from "./components/Industries";
import Products from "./components/Products";

import ProductPage, {
  productData,
} from "./components/ProductPage";

import Services from "./components/Services";
import ServicesPage from "./components/ServicesPage";

import Company from "./components/Company";
import Engagement from "./components/Engagement";

import Blog from "./components/Blog";
import BlogArticle, {
  blogArticleData,
} from "./components/BlogArticle";

import Contact from "./components/Contact";

import useRevealObserver from "./hooks/useRevealObserver";

function App() {
  useRevealObserver();

  const pathname = window.location.pathname;

  /* ============================================================
     INDUSTRIES
     /industries
     ============================================================ */

  const isIndustries =
    pathname === "/industries" ||
    pathname.startsWith("/industries/");


  /* ============================================================
     PRODUCTS MAIN PAGE
     /products
     ============================================================ */

  const isProducts =
    pathname === "/products";


  /* ============================================================
     PRODUCT DETAIL
     /products/cardio-touch
     /products/konnect-e
     etc.
     ============================================================ */

  const isProductDetail =
    pathname.startsWith("/products/") &&
    pathname !== "/products";

  const productSlug = isProductDetail
    ? pathname
        .split("/")
        .filter(Boolean)
        .pop()
    : null;

  const currentProduct =
    productSlug
      ? productData[productSlug]
      : null;


  /* ============================================================
     SERVICES MAIN PAGE
     /services
     ============================================================ */

  const isServices =
    pathname === "/services";


  /* ============================================================
     SERVICE DETAIL
     /services/web-enterprise-development
     /services/mobile-development
     etc.
     ============================================================ */

  const isServiceDetail =
    pathname.startsWith("/services/") &&
    pathname !== "/services";

  const serviceSlug = isServiceDetail
    ? pathname
        .split("/")
        .filter(Boolean)
        .pop()
    : null;


  /* ============================================================
     COMPANY
     /company
     ============================================================ */

  const isCompany =
    pathname === "/company";


  /* ============================================================
     ENGAGEMENT
     /engagement
     ============================================================ */

  const isEngagement =
    pathname === "/engagement";


  /* ============================================================
     BLOG MAIN PAGE
     /blog
     ============================================================ */

  const isBlog =
    pathname === "/blog";


  /* ============================================================
     BLOG ARTICLE DETAIL
     /blog/crm-erp-integration-that-actually-sticks
     /blog/product-thinking-for-internal-tools
     /blog/shipping-with-quality-engineering
     ============================================================ */

  const isBlogArticle =
    pathname.startsWith("/blog/") &&
    pathname !== "/blog";

  const blogSlug = isBlogArticle
    ? pathname
        .split("/")
        .filter(Boolean)
        .pop()
    : null;

  const currentBlogArticle =
    blogSlug
      ? blogArticleData[blogSlug]
      : null;


  /* ============================================================
     CONTACT
     /contact
     ============================================================ */

  const isContact =
    pathname === "/contact";


  return (
    <div className="flex min-h-screen flex-col bg-white">

      {/* ========================================================
          SKIP TO CONTENT
          ======================================================== */}

      <a
        href="#main"
        className="sr-only rounded-full bg-ink-900 px-5 py-3 text-sm font-medium text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60]"
      >
        Skip to content
      </a>


      {/* ========================================================
          NAVBAR
          ======================================================== */}

      <Navbar />


      {/* ========================================================
          MAIN
          ======================================================== */}

      <main id="main" className="flex-1">

        {/* ======================================================
            INDUSTRIES
            /industries
            ====================================================== */}

        {isIndustries ? (

          <Industries />


        /* ======================================================
           PRODUCTS MAIN PAGE
           /products
           ====================================================== */

        ) : isProducts ? (

          <Products />


        /* ======================================================
           PRODUCT DETAIL
           /products/:slug
           ====================================================== */

        ) : isProductDetail ? (

          currentProduct ? (

            <ProductPage
              product={currentProduct}
            />

          ) : (

            <div className="container-x py-32">

              <h1 className="font-display text-4xl font-semibold text-ink-900">
                Product not found
              </h1>

              <p className="mt-4 text-ink-500">
                The product you're looking for doesn't exist.
              </p>

              <a
                href="/products"
                className="mt-8 inline-flex rounded-full bg-rain-500 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-rain-600"
              >
                View products
              </a>

            </div>

          )


        /* ======================================================
           SERVICES MAIN PAGE
           /services
           ====================================================== */

        ) : isServices ? (

          <Services />


        /* ======================================================
           SERVICE DETAIL
           /services/:slug
           ====================================================== */

        ) : isServiceDetail ? (

          <ServicesPage
            serviceSlug={serviceSlug}
          />


        /* ======================================================
           COMPANY
           /company
           ====================================================== */

        ) : isCompany ? (

          <Company />


        /* ======================================================
           ENGAGEMENT
           /engagement
           ====================================================== */

        ) : isEngagement ? (

          <Engagement />


        /* ======================================================
           BLOG MAIN PAGE
           /blog
           ====================================================== */

        ) : isBlog ? (

          <Blog />


        /* ======================================================
           BLOG ARTICLE
           /blog/:slug
           ====================================================== */

        ) : isBlogArticle ? (

          currentBlogArticle ? (

            <BlogArticle
              article={currentBlogArticle}
            />

          ) : (

            <div className="container-x py-32">

              <h1 className="font-display text-4xl font-semibold text-ink-900">
                Article not found
              </h1>

              <p className="mt-4 text-ink-500">
                The article you're looking for doesn't exist.
              </p>

              <a
                href="/blog"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-rain-500 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-rain-600"
              >
                Back to Insights
              </a>

            </div>

          )


        /* ======================================================
           CONTACT
           /contact
           
           IMPORTANT:
           Contact.jsx contains its own dark footer.
           No CTAAndFooter is rendered here.
           ====================================================== */

        ) : isContact ? (

          <Contact />


        /* ======================================================
           HOME PAGE
           ====================================================== */

        ) : (

          <>

            <Hero />

            <TrustedClients />

            <WhatWeDo />

            <HowWePartner />

            <ByTheNumbers />

            <BuiltByRaintels />

            <QuoteSection />

            <DomainExperience />

            <CTAAndFooter />

          </>

        )}

      </main>

    </div>
  );
}

export default App;