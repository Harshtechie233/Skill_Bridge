import React from 'react';
import { 
  BookOpen, 
  Brain, 
  Users, 
  Trophy,
  Rocket,
  Target,
  ChevronRight,
  GraduationCap,
  Code,
  Palette,
  Database,
  Briefcase
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <header className="bg-indigo-600">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8 text-white" />
              <span className="ml-2 text-xl font-bold text-white">SkillBridge</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-white hover:text-indigo-100">Courses</a>
              <a href="#" className="text-white hover:text-indigo-100">Workshops</a>
              <a href="#" className="text-white hover:text-indigo-100">Community</a>
              <a href="#" className="text-white hover:text-indigo-100">About</a>
            </div>
            <div className="flex space-x-4">
              <button className="px-4 py-2 text-indigo-600 bg-white rounded-md hover:bg-indigo-50">
                Sign In
              </button>
              <button className="px-4 py-2 text-white border border-white rounded-md hover:bg-indigo-500">
                Get Started
              </button>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-6xl">
              Bridge Your Skills Gap
            </h1>
            <p className="mt-6 text-xl text-indigo-100 max-w-2xl mx-auto">
              Connect with industry experts, learn modern skills, and advance your career through personalized learning experiences.
            </p>
            <div className="mt-10">
              <button className="px-8 py-3 bg-white text-indigo-600 rounded-md text-lg font-semibold hover:bg-indigo-50 inline-flex items-center">
                Explore Courses
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
          Why Choose SkillBridge?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<BookOpen className="h-8 w-8 text-indigo-600" />}
            title="Comprehensive Courses"
            description="Access a wide range of courses from modern tech to traditional crafts."
          />
          <FeatureCard
            icon={<Brain className="h-8 w-8 text-indigo-600" />}
            title="AI-Driven Learning"
            description="Get personalized course recommendations based on your goals."
          />
          <FeatureCard
            icon={<Users className="h-8 w-8 text-indigo-600" />}
            title="Expert Mentorship"
            description="Learn directly from industry professionals and skilled artisans."
          />
          <FeatureCard
            icon={<Trophy className="h-8 w-8 text-indigo-600" />}
            title="Gamified Experience"
            description="Earn badges and certificates as you progress in your learning journey."
          />
          <FeatureCard
            icon={<Rocket className="h-8 w-8 text-indigo-600" />}
            title="Career Support"
            description="Get help with resume building and job placement opportunities."
          />
          <FeatureCard
            icon={<Target className="h-8 w-8 text-indigo-600" />}
            title="Focused Learning"
            description="Practice with real projects and get expert feedback."
          />
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Popular Learning Paths
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CourseCard
              icon={<Code className="h-6 w-6 text-indigo-600" />}
              title="Web Development"
              description="Master modern web technologies and frameworks."
              price="₹12,999"
              duration="12 weeks"
            />
            <CourseCard
              icon={<Database className="h-6 w-6 text-indigo-600" />}
              title="Data Science"
              description="Learn data analysis, ML, and visualization."
              price="₹15,999"
              duration="16 weeks"
            />
            <CourseCard
              icon={<Palette className="h-6 w-6 text-indigo-600" />}
              title="UI/UX Design"
              description="Create beautiful and functional user interfaces."
              price="₹9,999"
              duration="8 weeks"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            Join thousands of learners who are advancing their careers with SkillBridge.
          </p>
          <button className="px-8 py-3 bg-white text-indigo-600 rounded-md text-lg font-semibold hover:bg-indigo-50">
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <GraduationCap className="h-6 w-6 text-white" />
                <span className="ml-2 text-lg font-bold text-white">SkillBridge</span>
              </div>
              <p className="text-sm">
                Empowering individuals through accessible and quality education.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Learn</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Courses</a></li>
                <li><a href="#" className="hover:text-white">Workshops</a></li>
                <li><a href="#" className="hover:text-white">Mentorship</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-sm">© 2024 SkillBridge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function CourseCard({ 
  icon, 
  title, 
  description, 
  price, 
  duration 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  price: string;
  duration: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-indigo-600">{price}</span>
          <span className="text-sm text-gray-500">{duration}</span>
        </div>
      </div>
      <div className="px-6 py-4 bg-gray-50 border-t">
        <button className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
          Enroll Now
        </button>
      </div>
    </div>
  );
}

export default App;