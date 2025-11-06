import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface CourseCardProps {
  title: string;
  duration: string;
  topics: string[];
  description?: string;
}

const CourseCard = ({ title, duration, topics, description }: CourseCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 animate-fade-in border-2 hover:border-primary/50">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="flex items-center gap-2">
          <Clock size={16} />
          {duration}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className={`space-y-2 ${!isExpanded ? "line-clamp-3" : ""}`}>
            <p className="text-sm font-semibold text-primary">Course Outline:</p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              {topics.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
            {description && isExpanded && (
              <p className="text-sm text-muted-foreground mt-4">{description}</p>
            )}
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full"
            >
              {isExpanded ? (
                <>
                  Show Less <ChevronUp className="ml-2" size={16} />
                </>
              ) : (
                <>
                  More Details <ChevronDown className="ml-2" size={16} />
                </>
              )}
            </Button>
            {isExpanded && (
              <Button asChild size="sm" className="w-full">
                <Link to="/admission">Enroll Now</Link>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;