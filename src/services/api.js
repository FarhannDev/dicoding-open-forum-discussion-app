/* eslint-disable comma-dangle */
/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-return-await */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
const api = (() => {
  const API_BASE_URL = 'https://forum-api.dicoding.dev/v1';
  const putAccessToken = (token) => localStorage.setItem('token', token);
  const getAccessToken = () => localStorage.getItem('token');
  const _fetchWithAuth = async (url, options = {}) =>
    fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });

  const register = async ({ name, email, password }) => {
    try {
      const userData = { name, email, password };
      const response = await fetch(`${API_BASE_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      const responseData = await response.json();
      const { status, message } = responseData;

      if (status !== 'success') throw new Error(message);

      const {
        data: { user },
      } = responseData;

      return user;
    } catch (error) {
      console.error('Terjadi kesalahan:', error.message);
    }
  };

  const login = async ({ email, password }) => {
    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      // Periksa apakah responsenya sukses (status code 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Ubah responsenya menjadi objek JSON
      const responseData = await response.json();
      const {
        data: { token },
      } = responseData;

      return token;
    } catch (error) {
      console.error('Terjadi kesalahan:', error.message);
    }
  };

  const getOwnProfile = async () => {
    try {
      const response = await _fetchWithAuth(`${API_BASE_URL}/users/me`);
      // Periksa apakah responsenya sukses (status code 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      const {
        data: { user },
      } = responseData;

      return user;
    } catch (error) {
      console.error('Terjadi kesalahan:', error.message);
    }
  };

  const getAllUsers = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/users`);
      // Periksa apakah responsenya sukses (status code 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      const {
        data: { users },
      } = responseData;

      return users;
    } catch (error) {
      console.error('Terjadi kesalahan:', error.message);
    }
  };

  const getAllThreads = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/threads`);
      // Periksa apakah responsenya sukses (status code 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      const {
        data: { threads },
      } = responseData;
      return threads;
    } catch (error) {
      console.error('Terjadi kesalahan:', error.message);
    }
  };

  const getThreadsDetail = async (threadId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/threads/${threadId}`);
      // Periksa apakah responsenya sukses (status code 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      const {
        data: { detailThread },
      } = responseData;

      return detailThread;
    } catch (error) {
      console.error('Terjadi kesalahan:', error.message);
    }
  };

  const createThread = async ({ title, body, category }) => {
    try {
      const response = await fetch(`${API_BASE_URL}/threads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, body, category }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      const {
        data: { thread },
      } = responseData;

      return thread;
    } catch (error) {
      console.error('Terjadi kesalahan:', error.message);
    }
  };

  const createComment = async ({ threadId, content }) => {
    try {
      const response = await _fetchWithAuth(
        `${API_BASE_URL}/threads/${threadId}/comments`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ content }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      const {
        data: { comment },
      } = responseData;
      return comment;
    } catch (error) {
      console.error('Terjadi kesalahan:', error.message);
    }
  };

  const createUpVoteThread = async (threadId) => {
    try {
      const response = await _fetchWithAuth(
        `${API_BASE_URL}/threads/${threadId}/up-vote`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      const {
        data: { vote },
      } = responseData;
      return vote;
    } catch (error) {
      console.error('Terjadi kesalahan:', error.message);
    }
  };

  const createDownVoteThread = async (threadId) => {
    try {
      const response = await _fetchWithAuth(
        `${API_BASE_URL}/threads/${threadId}/down-vote`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      const {
        data: { vote },
      } = responseData;
      return vote;
    } catch (error) {
      console.error('Terjadi kesalahan:', error.message);
    }
  };

  const createNeutralizeThreadvote = async (threadId) => {
    try {
      const response = await _fetchWithAuth(
        `${API_BASE_URL}/threads/${threadId}/neutral-vote`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        }
      );
      if (!response.ok || response.status !== 'success') {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      const {
        data: { vote },
      } = responseData;
      return vote;
    } catch (error) {
      console.error('Terjadi kesalahan:', error.message);
    }
  };

  const createUpVoteComment = async (threadId, commentId) => {
    try {
      const response = await _fetchWithAuth(
        `${API_BASE_URL}/threads/${threadId}/comments/${commentId}/up-vote`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      const {
        data: { vote },
      } = responseData;
      return vote;
    } catch (error) {
      console.error('Terjadi kesalahan:', error.message);
    }
  };

  const createDownVoteComment = async (threadId, commentId) => {
    try {
      const response = await _fetchWithAuth(
        `${API_BASE_URL}/threads/${threadId}/comments/${commentId}/down-vote`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        }
      );

      if (!response.ok || response.status !== 'success') {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      const {
        data: { vote },
      } = responseData;
      return vote;
    } catch (error) {
      console.error('Terjadi kesalahan:', error.message);
    }
  };

  const createNeutralizeCommentVote = async (threadId, commentId) => {
    try {
      const response = await _fetchWithAuth(
        `${API_BASE_URL}/threads/${threadId}/comments/${commentId}/neutral-vote`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        }
      );

      if (!response.ok || response.status !== 'success') {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      const {
        data: { vote },
      } = responseData;
      return vote;
    } catch (error) {
      console.error('Terjadi kesalahan:', error.message);
    }
  };

  const getLeaderboards = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/leaderboards`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      const {
        data: { leaderboards },
      } = responseData;

      return leaderboards;
    } catch (error) {
      console.error('Terjadi kesalahan:', error.message);
    }
  };

  return {
    putAccessToken,
    getAccessToken,
    register,
    login,
    getOwnProfile,
    getAllUsers,
    getAllThreads,
    getThreadsDetail,
    createThread,
    createComment,
    createUpVoteThread,
    createDownVoteThread,
    createNeutralizeThreadvote,
    createUpVoteComment,
    createDownVoteComment,
    createNeutralizeCommentVote,
    getLeaderboards,
  };
})();

export default api;
