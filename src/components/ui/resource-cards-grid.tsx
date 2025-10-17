"use client"

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ResourceCardItem {
  iconSrc: string;
  title: string;
  lastUpdated: string;
  href: string;
}

interface ResourceCardsGridProps {
  items: ResourceCardItem[];
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const ResourceCardsGrid = ({ items, className }: ResourceCardsGridProps) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={cn(
        "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {items.map((item, index) => (
        <motion.a
          key={index}
          href={item.href}
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group block"
        >
          <div className="apple-card flex h-full flex-col justify-between">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <Image
                  src={item.iconSrc}
                  alt={`${item.title} icon`}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-xl object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground tracking-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.lastUpdated}
                  </p>
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-card-foreground" />
            </div>
          </div>
        </motion.a>
      ))}
    </motion.div>
  );
};
