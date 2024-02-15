// app/pages/index.tsx
import React from "react";
import { GetStaticProps } from "next";
import Link from "next/link";

type Profile = {
  id: number;
  name: string;
  // ...other profile fields
};

type IndexProps = {
  profiles: Profile[];
};

export const getStaticProps: GetStaticProps = async () => {
  // Replace 'https://your-mock-api.com/profiles' with your actual API endpoint.
  const res = await fetch("https://your-mock-api.com/profiles");
  const profiles: Profile[] = await res.json();

  return { props: { profiles } };
};

const IndexPage: React.FC<IndexProps> = ({ profiles }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-semibold text-gray-800 my-6">
        User Profiles
      </h1>
      <div className="space-y-4">
        {profiles.map((profile) => (
          <div key={profile.id} className="border p-4 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold">{profile.name}</h2>
            {/* Add additional profile information here */}
            <Link href={`/profiles/${profile.id}`}>
              <a className="text-blue-500 hover:underline">View Profile</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndexPage;
