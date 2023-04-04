export const REQUEST_STARTED = 'REQUEST_STARTED'
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL'
export const REQUEST_FAILED = 'REQUEST_FAILED';

const requestStarted = () => ({ type: REQUEST_STARTED });

const requestSuccessful = (characterName) => ({ type: REQUEST_SUCCESSFUL, payload: characterName });

const requestFailed = (error) => ({ type: REQUEST_FAILED, payload: error });

export const fetchGotCharacter = (input) => {
  return async (dispatch) => {
    dispatch(requestStarted());
    const response = await fetch(`https://anapioficeandfire.com/api/characters?name=${input}`);
    const data = await response.json();
    dispatch(requestSuccessful(data.name));
  }
}