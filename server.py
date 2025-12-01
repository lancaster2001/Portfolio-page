from http.server import SimpleHTTPRequestHandler, HTTPServer

class NoListing(SimpleHTTPRequestHandler):
    def list_directory(self, path):
        self.send_error(403, "Directory listing not allowed")
        return None

if __name__ == "__main__":
    server = HTTPServer(("0.0.0.0", 3002), NoListing)
    print("Serving from working directory...")
    server.serve_forever()