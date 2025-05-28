export default function Home({ html }) {
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

export async function getStaticProps() {
    const fs = require('fs');
    const path = require('path');

    const publicDir = path.join(process.cwd(), 'public');

    function walk(dir) {
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                walk(fullPath);
            } else {
                fs.readFileSync(fullPath);
            }
        }
    }

    walk(publicDir);

    const filePath = path.join(publicDir, 'index.html');
    const html = fs.readFileSync(filePath, 'utf8');

    return { props: { html } };
}

