export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { photoUrl, audioUrl } = req.body;

    // This calls the AI service to sync the lip movement
    const response = await fetch('https://api.heygen.com/v1/video_gen.create', {
      method: 'POST',
      headers: {
        'X-Api-Key': 'YOUR_API_KEY_HERE',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        input_face_url: photoUrl,
        input_audio_url: audioUrl,
        background: "movie_theater_realistic" // Custom parameter for scene
      })
    });

    const data = await response.json();
    res.status(200).json({ videoUrl: data.video_url });
  }
}
