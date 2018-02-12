import { IncomingMessage, ServerResponse } from 'http';

type HttpListener = (req: IncomingMessage, res: ServerResponse) => void;

export default HttpListener;
