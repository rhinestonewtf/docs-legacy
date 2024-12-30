find ./pages/ -type f -name "*.md" -o -name "*.mdx" | while read -r file; do
   sed -i '' -E 's/(\[[^]]*\]\([^http][^#)]*)(#.*\))/\1.mdx\2/g' "$file"
done
