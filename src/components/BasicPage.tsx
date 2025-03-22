
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface BasicPageProps {
  title: string;
  breadcrumb: string;
  children: React.ReactNode;
}

const BasicPage = ({ title, breadcrumb, children }: BasicPageProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        {/* Page Header */}
        <div className="mvmt-container py-8">
          <h1 className="text-3xl font-bold text-center">{title}</h1>
          <div className="flex justify-center mt-4">
            <nav className="text-sm text-mvmt-gray-600">
              <ol className="list-none p-0 inline-flex">
                <li className="flex items-center">
                  <Link to="/" className="hover:text-mvmt-black transition-colors duration-300">Home</Link>
                  <span className="mx-2">/</span>
                </li>
                <li className="text-mvmt-black">{breadcrumb}</li>
              </ol>
            </nav>
          </div>
        </div>
        
        <div className="mvmt-container">
          {children}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BasicPage;
