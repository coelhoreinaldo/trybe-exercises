export const REQUEST_STARTED = 'REQUEST_STARTED'
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL'
export const REQUEST_FAILED = 'REQUEST_FAILED';

const requestStarted = () => ({ type: REQUEST_STARTED })

const requestSuccessful = (info) => ({ type: REQUEST_SUCCESSFUL, payload: info})

const requestFailed = (error) => ({ type: REQUEST_FAILED, payload:error })