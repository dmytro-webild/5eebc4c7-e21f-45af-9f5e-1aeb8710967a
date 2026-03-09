"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroLogo from "@/components/sections/hero/HeroLogo";
import FeatureCardTwentySeven from "@/components/sections/feature/FeatureCardTwentySeven";
import MediaAbout from "@/components/sections/about/MediaAbout";
import MetricCardTwo from "@/components/sections/metrics/MetricCardTwo";
import TestimonialCardFive from "@/components/sections/testimonial/TestimonialCardFive";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterBaseCard from "@/components/sections/footer/FooterBaseCard";
import { Phone } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="mediumSmall"
      sizing="large"
      background="circleGradient"
      cardStyle="soft-shadow"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="ElectroServe"
          navItems={[
            { name: "Servicii", id: "services" },
            { name: "Despre noi", id: "about" },
            { name: "Contact", id: "contact" },
          ]}
          button={{ text: "Sună acum", href: "tel:+40XXXXXXXXX" }}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="ElectroServe"
          description="Servicii profesionale de electricitate pentru locuințe și întreprinderi locale. Răspuns rapid, preț corect, siguranță garantată."
          buttons={[
            { text: "Apelează acum", href: "tel:+40XXXXXXXXX" },
            { text: "Contactează-ne", href: "#contact" },
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/male-builder-electrical-engineer-overalls-helmet-holds-toolbox-hands-space-text_169016-66721.jpg"
          imageAlt="Electrician profesional la lucru"
          showDimOverlay={true}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTwentySeven
          title="Serviciile noastre"
          description="Descoperă gama completă de servicii electrice profesionale pe care le oferim pentru clienții locali."
          tag="Profesional"
          features={[
            {
              id: "1",              title: "Instalații Electrice",              description: "Instalație profesională de sisteme electrice noi pentru locuințe și spații comerciale, conform standardelor de siguranță.",              imageSrc: "http://img.b2bpic.net/free-photo/hotel-guest-inserting-keycard-turn-electricity_53876-20947.jpg",              imageAlt: "Instalație electrică"
            },
            {
              id: "2",              title: "Reparații Urgente",              description: "Serviciu rapid de reparație pentru probleme electrice urgente. Disponibil 24/7 pentru situații de urgență și întreruperi de curent.",              imageSrc: "http://img.b2bpic.net/free-photo/young-female-worker-uniform-pointing-clock-looking-pleased-front-view_176474-34419.jpg",              imageAlt: "Reparații urgente"
            },
            {
              id: "3",              title: "Reparații și Întreținere",              description: "Diagnosticare și reparație profesională a defectelor electrice. Service preventiv pentru a evita probleme viitoare.",              imageSrc: "http://img.b2bpic.net/free-photo/male-electrician-working-switchboard-male-electrician-overalls-working-with-electricity_169016-66822.jpg",              imageAlt: "Reparații electrice"
            },
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[{ text: "Cere ofertă", href: "#contact" }]}
        />
      </div>

      <div id="about" data-section="about">
        <MediaAbout
          title="Despre ElectroServe"
          description="Cu peste 15 ani de experiență, suntem specialiști în servicii electrice de calitate pentru comunitatea locală. Echipa noastră de electricieni certificați garantează siguranță, profesionalism și prețuri corecte."
          tag="Despre Noi"
          imageSrc="http://img.b2bpic.net/free-photo/male-female-workers-wearing-work-clothes_273609-11114.jpg"
          imageAlt="Echipa de electricieni profesioniști"
          useInvertedBackground={true}
          buttons={[{ text: "Planifică serviciu", href: "#contact" }]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="De ce ne alege clienții"
          description="Rezultatele noastre vorbesc de la sine - satisfacție și profesionalism în fiecare proiect."
          metrics={[
            { id: "1", value: "1500+", description: "Clienți satisfăcuți" },
            { id: "2", value: "15+", description: "Ani de experiență" },
            { id: "3", value: "24/7", description: "Disponibil oricând" },
            { id: "4", value: "100%", description: "Siguranță garantată" },
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="scale-rotate"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFive
          title="Ce spun clienții noștri"
          description="Recenzii autentice de la clienți satisfăcuți care ne au încredere pentru servicii electrice."
          tag="Testimoniale"
          testimonials={[
            {
              id: "1",              name: "Ioan Popescu, Proprietar casa",              date: "Date: 15 noiembrie 2024",              title: "Electrician serios și de încredere!",              quote: "Am apelat ElectroServe pentru reparații urgente la instalația electrică. Au venit în maximum 30 de minute și au rezolvat problema profesionist. Recomand cu plăcere!",              tag: "Reparații urgente",              avatarSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1620.jpg",              imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1620.jpg"
            },
            {
              id: "2",              name: "Maria Ionescu, Manager magazin",              date: "Date: 8 noiembrie 2024",              title: "Serviciu rapid și preț corect",              quote: "Am contractat ElectroServe pentru instalație nouă în magazin. Echipa a fost foarte profesionistă, respectă precizia și termenele. Prețurile sunt echitabile pentru calitatea serviciilor.",              tag: "Instalații noi",              avatarSrc: "http://img.b2bpic.net/free-photo/close-up-view-attractive-adult-male-with-beard-sitting-open-terrace-typing-laptop-looking-screen-with-interested-smile-using-wi-fi-communicate-online-while-away-vacations_273609-6597.jpg",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-view-attractive-adult-male-with-beard-sitting-open-terrace-typing-laptop-looking-screen-with-interested-smile-using-wi-fi-communicate-online-while-away-vacations_273609-6597.jpg"
            },
            {
              id: "3",              name: "Andrei Mihai, Proprietar apartament",              date: "Date: 25 octombrie 2024",              title: "Recomand cu încredere!",              quote: "Am avut probleme cu instalația electrică în apartament. ElectroServe a venit imediat, a diagnosticat problema și a rezolvat-o în timp record. Sunt foarte mulțumit!",              tag: "Diagnostic și reparații",              avatarSrc: "http://img.b2bpic.net/free-photo/head-shot-happy-beautiful-young-woman-posing-indoors-looking-camera-smiling_74855-10218.jpg",              imageSrc: "http://img.b2bpic.net/free-photo/head-shot-happy-beautiful-young-woman-posing-indoors-looking-camera-smiling_74855-10218.jpg"
            },
            {
              id: "4",              name: "Diana Stoica, Proprietar birou",              date: "Date: 12 octombrie 2024",              title: "Partner de încredere",              quote: "Lucrez cu ElectroServe de doi ani pentru toate nevoile electrice din birou. Sunt fiabili, profesionali și de fiecare dată vor o soluție bună. Partner perfect!",              tag: "Serviciu permanent",              avatarSrc: "http://img.b2bpic.net/free-photo/young-woman-isolated-dark-wall-showing-thumbs-up-with-two-hands_114579-58464.jpg",              imageSrc: "http://img.b2bpic.net/free-photo/young-woman-isolated-dark-wall-showing-thumbs-up-with-two-hands_114579-58464.jpg"
            },
          ]}
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Contact"
          title="Apelează-ne pentru o ofertă gratuită"
          description="Contactează-ne azi și beneficiază de o consultație profesională fără obligații. Echipa noastră este gata să te ajute cu orice problemă electrică."
          tagIcon={Phone}
          tagAnimation="slide-up"
          inputPlaceholder="Introdu emailul tău"
          buttonText="Trimite"
          background={{ variant: "rotated-rays-animated-grid" }}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="ElectroServe"
          columns={[
            {
              title: "Servicii",              items: [
                { label: "Instalații electrice", href: "#services" },
                { label: "Reparații urgente", href: "#services" },
                { label: "Reparații și întreținere", href: "#services" },
              ],
            },
            {
              title: "Companie",              items: [
                { label: "Despre noi", href: "#about" },
                { label: "Contact", href: "#contact" },
                { label: "Recenzii", href: "#testimonials" },
              ],
            },
            {
              title: "Legal",              items: [
                { label: "Politica de confidențialitate", href: "#" },
                { label: "Termeni și condiții", href: "#" },
                { label: "Politica de cookies", href: "#" },
              ],
            },
          ]}
          copyrightText="© 2025 ElectroServe. Toți drepturile rezervate."
        />
      </div>
    </ThemeProvider>
  );
}