
import React from 'react';
import ApiKeyCard from './ApiKeyCard';

// Fix: Define ApiViewProps to accept theme and resolve TypeScript error in App.tsx
interface ApiViewProps {
  theme: any;
}

const ApiView: React.FC<ApiViewProps> = ({ theme }) => {
  const apiKeys = [
    { label: "Clé de production", value: "cJkklAbw9WqCqx9hBAEukWVX" },
    { label: "Clé de test (Sandbox)", value: "44MwZrtjTwzv21V7KlLbsCTP", isSandbox: true },
    { label: "ID de l'entreprise (BusinessId)", value: "yUpAlfDjMs" },
  ];

  return (
    <div className="max-w-5xl">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2" style={{ color: theme.colors.text.title }}>Clés API</h1>
        <p className="leading-relaxed text-sm max-w-3xl" style={{ color: theme.colors.text.muted }}>
          L'API de Taramoney fournit une interface programmable et sécurisée à vos données financières. Utilisez notre API pour 
          créer des applications privées ou publiques, automatiser les flux de paiement, gérer les collections et intégrer Tara à vos 
          systèmes existants. Tara permet aux entreprises de rationaliser leurs opérations financières avec précision et fiabilité.
        </p>
      </header>

      <section className="space-y-4 mb-8">
        {apiKeys.map((key, idx) => (
          // Fix: Passing theme down to ApiKeyCard
          <ApiKeyCard key={idx} {...key} theme={theme} />
        ))}
      </section>

      <button 
        className="text-white px-6 py-3 rounded-xl font-semibold transition-colors shadow-sm mb-12"
        style={{ backgroundColor: theme.colors.primary }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = theme.colors.primaryHover)}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = theme.colors.primary)}
      >
        Générer de nouvelles clés
      </button>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4" style={{ color: theme.colors.text.title }}>Webhook</h2>
        <p className="leading-relaxed text-sm max-w-3xl mb-6" style={{ color: theme.colors.text.muted }}>
          Les webhooks vous permettent de recevoir des notifications en temps réel pour les événements liés à vos
          transactions clients. Utilisez ce secret pour vérifier l'authenticité des requêtes entrantes et vous assurer que
          les données envoyées par Taramoney sont traitées.
        </p>
        <button 
          className="text-white px-6 py-3 rounded-xl font-semibold transition-colors shadow-sm"
          style={{ backgroundColor: theme.colors.primary }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = theme.colors.primaryHover)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = theme.colors.primary)}
        >
          Générer un secret de webhook
        </button>
      </section>
    </div>
  );
};

export default ApiView;
