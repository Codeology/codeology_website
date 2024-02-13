import os

import PIL
import tqdm
from PIL import Image

desired_height = 400

members_file_path = "src/images/members"
compressed_images = "src/images/compressed_members"

files = os.listdir(members_file_path)

for name in tqdm.tqdm(files):
    try:
        print(f"Resizing {name}")
        if not name.endswith('.jpg'):
            print("Filename doesn't end with .jpg")
            continue
        image_path = os.path.join(members_file_path, name)
        in_image = Image.open(image_path)
        r = max(in_image.size)
        w, h = in_image.size

        desired_size = (int(float(w) * float(desired_height / h)), desired_height)
        if desired_size[0] < desired_size[1]:
            desired_size = (desired_height, int(float(h) * float(desired_height / w)))


        out_image = in_image.resize(desired_size)
        out_image = out_image.convert("RGB")
        print(name)
        out_image.save(os.path.join(compressed_images, name))
    except PIL.UnidentifiedImageError as e:
        print(e)

