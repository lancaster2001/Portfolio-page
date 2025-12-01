from http.server import SimpleHTTPRequestHandler, HTTPServer

class NoListing(SimpleHTTPRequestHandler):
    def list_directory(self, path):
        self.send_error(403, "Directory listing not allowed")
        return None

if __name__ == "__main__":
    HTTPServer(("0.0.0.0", 8000), NoListing).serve_forever()
