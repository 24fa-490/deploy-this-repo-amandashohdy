
import postgres from 'postgres'

// see env variables in .env
import {VITE_PGCONNECT} from '$env/static/private';

const sql = postgres(VITE_PGCONNECT, {} )

export default sql;
