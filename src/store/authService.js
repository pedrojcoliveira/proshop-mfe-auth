const authService = (() => {
  // Re-hidrata do localStorage no arranque
  let userInfo = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;

  let subscribers = [];

  const notify = () => subscribers.forEach((cb) => cb(userInfo));

  const persist = (data) => {
    if (data) {
      localStorage.setItem('userInfo', JSON.stringify(data));
    } else {
      localStorage.removeItem('userInfo');
    }
  };

  return {
    // Lê o utilizador atual
    getUser: () => userInfo,

    // Verifica se é admin
    isAdmin: () => userInfo?.isAdmin === true,

    // Verifica se está autenticado
    isAuthenticated: () => userInfo !== null,

    // Login — chamado pelo LoginScreen e RegisterScreen após autenticação
    setUser: (data) => {
      userInfo = data;
      persist(data);
      notify();
      // Mantém o Custom Event para compatibilidade com MFEs não migrados
      window.dispatchEvent(new CustomEvent('userChanged', { detail: { userInfo: data } }));
    },

    // Logout — limpa a sessão
    logout: () => {
      userInfo = null;
      persist(null);
      localStorage.removeItem('cart');
      notify();
      window.dispatchEvent(new CustomEvent('userChanged', { detail: { userInfo: null } }));
    },

    // Subscreve alterações — retorna função de cancelamento
    subscribe: (callback) => {
      subscribers.push(callback);
      return () => {
        subscribers = subscribers.filter((cb) => cb !== callback);
      };
    },
  };
})();

export default authService;
