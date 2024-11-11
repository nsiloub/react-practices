import Heading from "./components/Heading";
import Section from "./components/Section";

export default function ProfilePage() {
    return (
        <Section>
            <Heading>
                <Heading>Posts</Heading>
                <RecentPosts />
            </Heading>
            <Post
                title="Hello Traveller!"
                body="Read about my adventures."
            />
            <AllPosts />
        </Section>
    )
};

function AllPosts() {
    return (
        <Section>
            <Heading>Posts</Heading>
            <RecentPosts />
        </Section>
    )
}

function RecentPosts() {
    return (
        <Section>
            <Heading>Recent Posts</Heading>
            <Post
                title="Flavors of Lisbon"
                body="...those pasteis de nata!"
            />
            
            <Post
                title="Buenos Aires in the rhythm of tango"
                body="I love it!"
            />
        </Section>
    )
}

function Post({title, body} : {
    title: string,
    body: string
}) {
    return (
        <Section isFancy={true}>
            <Heading>
                {title}
            </Heading>
            <p><i> {body} </i></p>
        </Section>
    )
}