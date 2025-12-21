const GOOGLE_API_KEY="AIzaSyCFR9TGZDOjHZr01AGOipXrK4iz1CkQaEA";
export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?" +
  "part=snippet,contentDetails,statistics" +
  "&chart=mostPopular" +
  "&regionCode=IN" +
  "&maxResults=50" +
  "&key=" + GOOGLE_API_KEY;

