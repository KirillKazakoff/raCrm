import React from 'react';

export default function Error({ error }) {
    const html = error ? <span>{error}</span> : null;

    return <div>{html}</div>;
}
