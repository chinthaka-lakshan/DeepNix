from PIL import Image, ImageOps, ImageDraw

def make_circle(image_path, output_path):
    try:
        img = Image.open(image_path).convert("RGBA")
        
        # Create a circular mask
        mask = Image.new('L', img.size, 0)
        draw = ImageDraw.Draw(mask)
        draw.ellipse((0, 0) + img.size, fill=255)
        
        # Create a white background circle
        output = Image.new('RGBA', img.size, (0, 0, 0, 0))
        
        # Draw white circle
        draw_output = ImageDraw.Draw(output)
        draw_output.ellipse((0, 0) + img.size, fill=(255, 255, 255, 255))
        
        # Composite the logo onto the white circle
        # We need to resize the logo slightly to fit INSIDE the white circle comfortably
        # Calculate new size (e.g., 80% of original)
        padding_factor = 0.8
        new_size = (int(img.size[0] * padding_factor), int(img.size[1] * padding_factor))
        img_resized = img.resize(new_size, Image.Resampling.LANCZOS)
        
        # Center position
        pos = ((img.size[0] - new_size[0]) // 2, (img.size[1] - new_size[1]) // 2)
        
        # Paste logo onto white circle
        output.paste(img_resized, pos, img_resized)
        
        # Apply the circular mask to the final result to ensure perfect transparency outside
        output.putalpha(mask)
        
        output.save(output_path, "PNG")
        print(f"Successfully created circular favicon at {output_path}")
        
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    # Using the original high-res logo as source
    make_circle("d:/Projects/DeepNix/public/DeepNix1.png", "d:/Projects/DeepNix/public/favicon-circle-final.png")
