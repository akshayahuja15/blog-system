from rest_framework import generics
from .models import Blog
from .serializers import BlogSerializer

class BlogListCreateView(generics.ListCreateAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

class BlogDetailView(generics.RetrieveDestroyAPIView):  # Allow DELETE
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
