"use client"
import React, { useState, useRef } from "react";
import { useSession } from "next-auth/react";
import EmojiPicker from "emoji-picker-react";
import { db, storage } from "../firebase";
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { useRouter } from 'next/navigation'

export default function Input() {
  const { data: session } = useSession();
  const [text, setText] = useState("");
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  // Add this inside your Input component

const sendPost = async (e: React.FormEvent) => {
  e.preventDefault();
  
  if (!session) {
    console.error("No session found");
    return;
  }
  
    try {
      // Create post document with user information
      const docRef = await addDoc(collection(db, "posts"), {
        text: text.trim(),
        timestamp: serverTimestamp(),
        userId: session.user.uid,
        username: session.user.name,
        userImage: session.user.image,
        email: session.user.email,
      });
  
      // Handle image upload
      if (selectedFile) {
       const storageRef = ref(storage, `posts/${session.user.uid}/${docRef.id}/image`);
        await uploadString(storageRef, selectedFile, "data_url");
        const downloadURL = await getDownloadURL(storageRef);
        
        await updateDoc(doc(db, "posts", docRef.id), {
          image: downloadURL
        });
      }
  
      setText("");
      setSelectedFile(null);
      setShowEmojiPicker(false);
  
    } catch (error) {
      console.error("Posting failed:", error);
    } finally {
      setLoading(false);
    }
  };
  // Handle image upload and convert to data URL
  const addImageToPost = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    if (e.target.files?.[0]) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (readerEvent) => {
        if (readerEvent.target?.result) {
          setSelectedFile(readerEvent.target.result as string);
        }
      };
    }
  };

  // Add selected emoji to the text
  const addEmoji = (emoji: any) => {
    setText((prevText) => prevText + emoji.emoji);
    setShowEmojiPicker(false);
  };

  // Copy text to clipboard
  const copyText = () => {
    navigator.clipboard.writeText(text);
  };

  return (
<div className={`border-b p-3 border-gray-900 ${loading && "opacity-60"}`}>
<form onSubmit={sendPost}>
        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-900 dark:bg-gray-900 dark:border-gray-900">
          <div className="flex items-center justify-between px-3 py-2 border-b border-gray-200 dark:border-gray-600 border-gray-900">
            <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600">
              <div className="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4 relative">
                {/* Emoji Picker */}
                {showEmojiPicker && (
                  <div className="absolute top-full right-0 z-10 mt-2 w-28">
                    <EmojiPicker
                      onEmojiClick={addEmoji}
                      theme="dark"
                      height={400}
                      width={300}
                    />
                  </div>
                )}

                {/* Emoji Button */}
                <button
                  type="button"
                  className="p-2 text-gray-500 rounded-sm cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM13.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm3.5 9.5A5.5 5.5 0 0 1 4.6 11h10.81A5.5 5.5 0 0 1 10 15.5Z" />
                  </svg>
                  <span className="sr-only">Add emoji</span>
                </button>

                {/* Hidden file input for image upload */}
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  ref={fileInputRef}
                  onChange={addImageToPost}
                />

                {/* Image Upload Button */}
                <button
                  type="button"
                  className="p-2 text-gray-500 rounded-sm cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 20"
                  >
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                  </svg>
                  <span className="sr-only">Upload image</span>
                </button>

                {/* Copy Text Button */}
                <button
                  type="button"
                  className="p-2 text-gray-500 rounded-sm cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  onClick={copyText}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                  </svg>
                  <span className="sr-only">Copy text</span>
                </button>
              </div>
            </div>
          </div>

          {/* Textarea and Image Preview */}
          <div className="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-900">
            <label htmlFor="editor" className="sr-only">
              Publish post
            </label>
            <textarea
              id="editor"
              value={text}
              onInput={handleInput}
              rows={4}
              className="block w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-900 focus:ring-0 dark:text-white dark:placeholder-gray-400"
              placeholder="Write something..."
              required
            />
            {selectedFile && (
              <div className="relative mt-4">
                <div
                  className="absolute w-8 h-8 bg-black hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer"
                  onClick={() => setSelectedFile(null)}
                >
                  <span className="text-white">×</span>
                </div>
                <img
                  src={selectedFile}
                  alt="Preview"
                  className="rounded-2xl max-h-50 object-contain"
                />
              </div>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="inline-flex items-center px-2 py-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800 disabled:bg-blue-500 disabled:cursor-not-allowed disabled:hover:bg-blue-300"
          disabled={!text.trim() && !selectedFile}
          onClick={sendPost}
        >
          Publish post
        </button>
      </form>
    </div>
  );
}