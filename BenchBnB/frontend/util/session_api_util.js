export const signup = (userInfo, success, error) => {
  debugger
  $.ajax({
    method: 'POST',
    url: 'api/users.json',
    data: userInfo,
    success,
    error
  });
};

export const login = (success, error, userInfo) => {
  $.ajax({
    method: 'POST',
    url: 'api/session.json',
    data: userInfo,
    success,
    error
  });
};

export const logout = (success, error) => {
  $.ajax({
    method: 'DELETE',
    url: 'api/session.json',
    success,
    error
  });
};
