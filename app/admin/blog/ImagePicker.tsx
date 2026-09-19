"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

/**
 * Featured image field. The text input alone is enough for automation (an
 * existing /images/gallery/... path, or any already-uploaded URL) — the
 * file input is an optional convenience for a human uploading a new image,
 * never the only way to set the field.
 */
export default function ImagePicker({
  name,
  label,
  defaultValue,
}: {
  name: string;
  label: string;
  defaultValue?: string;
}) {
  const [value, setValue] = useState(defaultValue ?? "");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError(null);
    try {
      const supabase = createClient();
      const ext = file.name.split(".").pop() || "jpg";
      const path = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
      const { error: uploadError } = await supabase.storage.from("blog-images").upload(path, file, {
        cacheControl: "31536000",
        upsert: false,
      });
      if (uploadError) throw uploadError;
      const { data } = supabase.storage.from("blog-images").getPublicUrl(path);
      setValue(data.publicUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed.");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-neutral-700">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type="text"
        required
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="/images/gallery/example.jpg or https://..."
        className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-neutral-900 focus:outline-none"
      />
      <div className="mt-2 flex items-center gap-3">
        <input type="file" accept="image/*" onChange={handleFile} className="text-xs text-neutral-500" />
        {uploading && <span className="text-xs text-neutral-500">Uploading…</span>}
      </div>
      {error && <p className="mt-1 text-xs text-red-700">{error}</p>}
      {value && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={value} alt="" className="mt-2 h-24 w-auto rounded-md border border-neutral-200 object-cover" />
      )}
    </div>
  );
}
