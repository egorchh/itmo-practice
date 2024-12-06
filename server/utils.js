import fs from 'fs';
import https from 'https';

export const loadData = async (filename, setData) => {
	try {
		const data = await fs.promises.readFile(filename, 'utf-8');
		setData(JSON.parse(data));
	} catch (error) {
		console.error(`Error loading file ${filename}:`, error);
		throw error;
	}
};

export const downloadFile = async (url, filename) => {
	const stream = fs.createWriteStream(filename);
	return new Promise((resolve, reject) => {
		https.get(url, (res) => {
			res.pipe(stream);
			stream.on('finish', () => resolve());
			stream.on('error', reject);
		}).on('error', reject);
	});
};