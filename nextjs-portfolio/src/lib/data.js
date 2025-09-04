// Data fetching utilities for Jekyll JSON files
import fs from 'fs';
import path from 'path';

export async function getProfileData() {
  try {
    const res = await fetch(`${process.env.NODE_ENV === 'production' ? '/myPortfolio2.0' : ''}/profile.json`);
    if (!res.ok) throw new Error('Failed to fetch profile data');
    return await res.json();
  } catch (error) {
    console.error('Error fetching profile data:', error);
    return null;
  }
}

export async function getProjectsData() {
  try {
    const res = await fetch(`${process.env.NODE_ENV === 'production' ? '/myPortfolio2.0' : ''}/projects.json`);
    if (!res.ok) throw new Error('Failed to fetch projects data');
    return await res.json();
  } catch (error) {
    console.error('Error fetching projects data:', error);
    return { projects: [] };
  }
}

export async function getResumeData() {
  try {
    const res = await fetch(`${process.env.NODE_ENV === 'production' ? '/myPortfolio2.0' : ''}/resume.json`);
    if (!res.ok) throw new Error('Failed to fetch resume data');
    return await res.json();
  } catch (error) {
    console.error('Error fetching resume data:', error);
    return null;
  }
}

// For static generation (build time)

export async function getStaticProfileData() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'profile.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error('Error reading profile data:', error);
    return null;
  }
}

export async function getStaticProjectsData() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'projects.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error('Error reading projects data:', error);
    return { projects: [] };
  }
}

export async function getStaticResumeData() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'resume.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error('Error reading resume data:', error);
    return null;
  }
}
