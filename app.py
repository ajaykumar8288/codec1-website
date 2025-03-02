from flask import Flask, render_template
import requests
from bs4 import BeautifulSoup


app = Flask(__name__)

# 🔹 Your Blogger API Key
API_KEY = "AIzaSyB671RUv8ZXSu1vbyyLyV_MqCziI125ko4"
BLOG_ID = "3980126341271218800"
DEFAULT_IMAGE_URL = "https://1.bp.blogspot.com/-3wfaUJTT58M/Z4Pp_qM5hYI/AAAAAAAAAEA/o-abz-68_ug59IP3U_M_v2b0to-gIEQOQCK4BGAYYCw/s35/logo.png"


def extract_image_url(content):
    soup = BeautifulSoup(content, "html.parser")
    img_tag = soup.find("img")
    return img_tag["src"] if img_tag else DEFAULT_IMAGE_URL  # Default image if no image found

# Function to fetch blog posts
def fetch_blog_posts():
    url = f"https://www.googleapis.com/blogger/v3/blogs/{BLOG_ID}/posts?key={API_KEY}"
    response = requests.get(url)
    print("API Response Status Code:", response.status_code)  # ✅ Status code check
    print("API Response JSON:", response.json())  # ✅ Full API response check
    
    if response.status_code == 200:
        posts = response.json().get("items", [])  # Return posts list
        for post in posts:
            post["image_url"] = extract_image_url(post["content"])  # Add extracted image
        return posts
    return []  # Return empty list if error
@app.route("/")
def home():
    blogs = fetch_blog_posts()
    featured_blogs = blogs[:3]  # First 3 blogs as featured
    latest_blogs = blogs  # All blogs as latest
    return render_template("index.html", featured_blogs=featured_blogs, latest_blogs=latest_blogs)

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/tutorial")
def tutorial():
    return render_template("tutorial.html")

@app.route("/blog")
def blog():
    blogs = fetch_blog_posts()
    return render_template("blog.html", blogs=blogs)

@app.route("/contact")
def contact():
    return render_template("contact.html")

if __name__ == "__main__":
    app.run(debug=True)
