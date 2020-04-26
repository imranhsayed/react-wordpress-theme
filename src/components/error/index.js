/**
 * Error Message Component.
 *
 * @type {string}
 */
const Error = ( props ) => (
	props.message ? <div  className="error-message">{ props.message }</div> : ''
);

export default Error;
