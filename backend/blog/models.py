from django.db import models

class Blog(models.Model):
    username = models.CharField(max_length=100, default="Anonymous")
    title = models.CharField(max_length=255)
    short_description = models.CharField(max_length=255, default="No description available.")
    content = models.TextField()
    country = models.CharField(max_length=100, default="Unknown")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
